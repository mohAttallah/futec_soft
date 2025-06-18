import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { UserCardProps } from './types/user.types';

const UserCard: React.FC<UserCardProps> = ({ user, onPress, onEdit, onDelete, styles }) => (
    <View style={styles.userCard}>
        <TouchableOpacity
            style={styles.userCardContent}
            onPress={() => onPress(user)}
        >
            <View style={styles.userInfo}>
                <View style={styles.userHeader}>
                    <Text style={styles.username}>{user.UserName}</Text>
                    <View style={[
                        styles.statusBadge,
                        user.IsActive ? styles.activeBadge : styles.inactiveBadge
                    ]}>
                        <Text style={[
                            styles.statusText,
                            user.IsActive ? styles.activeText : styles.inactiveText
                        ]}>
                            {user.IsActive ? 'Active' : 'Inactive'}
                        </Text>
                    </View>
                </View>
                <Text style={styles.userEmail}>Branch: {user.BranchDesc}</Text>
                <Text style={styles.userRole}>Role: {user.GroupEnName} ({user.GroupArName})</Text>
                <Text style={styles.lastLogin}>User No: {user.UserNo}</Text>
            </View>
        </TouchableOpacity>

        <View style={styles.userActions}>
            <TouchableOpacity
                style={[styles.actionButton, styles.editButton]} 
                onPress={() => onEdit(user)}
            >
                <Text style={styles.actionButtonText}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.actionButton, styles.deleteButtonSmall]}
                onPress={() => onDelete(user)}
            >
                <Text style={styles.actionButtonText}>Delete</Text>
            </TouchableOpacity>
        </View>
    </View>
);

export default UserCard;
