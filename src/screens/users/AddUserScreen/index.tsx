import React, { useState } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
import {
  UserForm,
  GroupBottomSheet,
  BranchBottomSheet,
  UserGroup,
  Branch,
  MessageState
} from '../../../components/user';
import Button from '../../../components/common/Button';
import Header from '../../../components/common/Header';
import AnimatedMessage from '../../../components/common/AnimatedMessage';
import { useGetUsersGroupQuery, useGetBranchesQuery } from '../../../store/appApi';
import styles from './style';

const AddUserScreen: React.FC = ({ navigation }: any) => {
  const { data: userGroupsResponse, } = useGetUsersGroupQuery({});
  const { data: branchesResponse, } = useGetBranchesQuery({});

  const userGroups = userGroupsResponse?.Success ? userGroupsResponse.Response : [];
  const branches = branchesResponse?.Success ? branchesResponse.Response : [];

  const [userNumber, setUserNumber] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<UserGroup | null>(null);
  const [isActive, setIsActive] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [isGroupModalVisible, setIsGroupModalVisible] = useState<boolean>(false);
  const [isBranchModalVisible, setIsBranchModalVisible] = useState<boolean>(false);
  const [messageState, setMessageState] = useState<MessageState>({
    visible: false,
    message: '',
    type: 'success',
  });

  const showMessage = (message: string, type: 'error' | 'success' | 'warning' = 'success') => {
    setMessageState({
      visible: true,
      message,
      type,
    });
  };

  const hideMessage = () => {
    setMessageState(prev => ({ ...prev, visible: false }));
  };

  const handleSelectGroup = (group: UserGroup) => {
    setSelectedGroup(group);
    setIsGroupModalVisible(false);
  };

  const handleSelectBranch = (branch: Branch) => {
    setSelectedBranch(branch);
    setIsBranchModalVisible(false);
  };

  const resetForm = () => {
    setUserNumber('');
    setUsername('');
    setPassword('');
    setSelectedBranch(null);
    setSelectedGroup(null);
    setIsActive(true);
  };

  const handleAddUser = async (): Promise<void> => {
    if (!userNumber || !username || !password || !selectedGroup || !selectedBranch) {
      showMessage('Please fill all required fields', 'error');
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      showMessage('User added successfully', 'success');

      setTimeout(() => {
        resetForm();
        navigation.goBack();
      }, 2000);
    } catch (error) {
      showMessage('Failed to add user', 'error');
    } finally {
      setLoading(false);
    }
  };
  const renderGroupBottomSheet = () => (
    <GroupBottomSheet
      visible={isGroupModalVisible}
      onClose={() => setIsGroupModalVisible(false)}
      title="Select User Group"
      userGroups={userGroups}
      selectedGroup={selectedGroup}
      onSelectGroup={handleSelectGroup}
      styles={styles}
    />
  );

  const renderBranchBottomSheet = () => (
    <BranchBottomSheet
      visible={isBranchModalVisible}
      onClose={() => setIsBranchModalVisible(false)}
      title="Select Branch"
      branches={branches}
      selectedBranch={selectedBranch}
      onSelectBranch={handleSelectBranch}
      styles={styles}
    />
  );

  return (
    <View style={styles.container}>
      <Header title="Add New User" />

      <AnimatedMessage
        message={messageState.message}
        type={messageState.type}
        visible={messageState.visible}
        onHide={hideMessage}
        duration={4000}
      />

      <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <UserForm
            userNumber={userNumber}
            username={username}
            password={password}
            selectedGroup={selectedGroup}
            selectedBranch={selectedBranch}
            isActive={isActive}
            onUserNumberChange={setUserNumber}
            onUsernameChange={setUsername}
            onPasswordChange={setPassword}
            onGroupPress={() => setIsGroupModalVisible(true)}
            onBranchPress={() => setIsBranchModalVisible(true)}
            onActiveChange={setIsActive}
            styles={styles}
          />

          <View style={styles.buttonContainer}>
            <Button
              title="Save"
              onPress={handleAddUser}
              loading={loading}
              style={styles.saveButton}
            />

            <Button
              title="Cancel"
              onPress={() => navigation.goBack()}
              style={styles.cancelButton}
            />
          </View>
        </View>
      </ScrollView>

      {renderGroupBottomSheet()}
      {renderBranchBottomSheet()}
    </View>
  );
};



export default AddUserScreen;
