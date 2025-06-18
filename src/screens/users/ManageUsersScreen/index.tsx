import React, { useState, useEffect, useMemo } from 'react';
import {
    View,
    Text,
    FlatList,
    RefreshControl,
} from 'react-native';
import {
    UserCard,
    UserDetailsModal,
    EditUserModal,
    DeleteUserModal,
    SearchSection,
    UserData,
    MessageState
} from '../../../components/user';
import AnimatedMessage from '../../../components/common/AnimatedMessage';
import Header from '../../../components/common/Header';
import Loading from '../../../components/common/Loading';
import NetworkStatusBar from '../../../components/common/NetworkStatusBar';
import styles from './style';
import {useGetUserQuery} from '../../../store/appApi';

const ManageUsersScreen: React.FC = ({navigation}: any) => {
    const { data: apiResponse, error, isLoading: isApiLoading, refetch } = useGetUserQuery({});
    const [filteredUsers, setFilteredUsers] = useState<UserData[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState<boolean>(false);
    const [editingUser, setEditingUser] = useState<UserData | null>(null);
    const [messageState, setMessageState] = useState<MessageState>({
        visible: false,
        message: '',
        type: 'success',
    });


    const users = useMemo(() => {
        return apiResponse?.Success ? apiResponse.Response : [];
    }, [apiResponse]);

    useEffect(() => {
        if (error) {
            showMessage('Failed to load users', 'error');
        }
    }, [error]);const showMessage = (message: string, type: 'error' | 'success' | 'warning' = 'success') => {
        setMessageState({
            visible: true,
            message,
            type,
        });
    };

    const hideMessage = () => {
        setMessageState(prev => ({ ...prev, visible: false }));
    };

    const handleRefresh = async () => {
        setIsRefreshing(true);
        try {
            await refetch();
            showMessage('Users list updated successfully', 'success');
        } catch {
            showMessage('Failed to refresh users', 'error');
        } finally {
            setIsRefreshing(false);
        }
    };

    const handleSearch = (query: string) => {
        setSearchQuery(query);

        if (query.trim() === '') {
            setFilteredUsers(users);
        } else {
            const filtered = users.filter((user: UserData) =>
                user.UserName.toLowerCase().includes(query.toLowerCase()) ||
                user.GroupEnName.toLowerCase().includes(query.toLowerCase()) ||
                user.GroupArName.includes(query) ||
                user.Branch.includes(query)
            );
            setFilteredUsers(filtered);
        }
    };

    const handleUserPress = (user: UserData) => {
        setSelectedUser(user);
        setIsModalVisible(true);
    };

    const handleEditUser = (user: UserData) => {
        setEditingUser({ ...user });
        setIsEditModalVisible(true);
    };

    const handleDeleteUserConfirm = (user: UserData) => {
        setSelectedUser(user);
        setIsDeleteModalVisible(true);
    };

    const confirmDeleteUser = () => {
        if (selectedUser) {
            setIsDeleteModalVisible(false);
            setSelectedUser(null);
        }
    };

    const handleSaveEdit = () => {
        if (editingUser) {
            setIsEditModalVisible(false);
            setEditingUser(null);
        }
    };

    const handleEditInputChange = (field: keyof UserData, value: string | boolean) => {
        if (editingUser) {
            setEditingUser({
                ...editingUser,
                [field]: value,
            });        }
    };    const renderPaginationControls = () => (
        <View style={styles.paginationContainer}>
            <View style={styles.paginationInfo}>
                <Text style={styles.paginationText}>
                    Showing {users.length} users
                </Text>
            </View>
        </View>
    );

    useEffect(() => {
        if (users.length > 0) {
            setFilteredUsers(users);
        }
    }, [users]);

    if (isApiLoading && users.length === 0) {
        return <Loading />;
    }    return (
        <View style={styles.container}>
            <Header title="Manage Users" />
            <NetworkStatusBar />

            <AnimatedMessage
                message={messageState.message}
                type={messageState.type}
                visible={messageState.visible}
                onHide={hideMessage}
                duration={4000}
            />

            <View style={styles.content}>
                <SearchSection
                    searchQuery={searchQuery}
                    onSearchChange={handleSearch}
                    onAddUser={() => navigation.navigate('AddUser')}
                    styles={styles}
                />

                <FlatList
                    data={filteredUsers}
                    renderItem={({ item }) => (
                        <UserCard
                            user={item}
                            onPress={handleUserPress}
                            onEdit={handleEditUser}
                            onDelete={handleDeleteUserConfirm}
                            styles={styles}
                        />
                    )}
                    keyExtractor={(item) => item.UserNo.toString()}
                    style={styles.usersList}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={isRefreshing}
                            onRefresh={handleRefresh}
                        />
                    }
                    ListEmptyComponent={
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No users found</Text>
                        </View>
                    }
                />

                {renderPaginationControls()}

                <UserDetailsModal
                    visible={isModalVisible}
                    user={selectedUser}
                    onClose={() => setIsModalVisible(false)}
                    styles={styles}
                />

                <EditUserModal
                    visible={isEditModalVisible}
                    user={editingUser}
                    onClose={() => setIsEditModalVisible(false)}
                    onSave={handleSaveEdit}
                    onInputChange={handleEditInputChange}
                    styles={styles}
                />

                <DeleteUserModal
                    visible={isDeleteModalVisible}
                    user={selectedUser}
                    onClose={() => setIsDeleteModalVisible(false)}
                    onConfirm={confirmDeleteUser}
                    styles={styles}
                />
            </View>
        </View>
    );
};

export default ManageUsersScreen;
