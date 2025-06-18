import React from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import Input from '../common/Input';
import { COLORS } from '../../utils/constants';
import { UserFormProps } from './types/user.types';

const UserForm: React.FC<UserFormProps> = ({
    userNumber,
    username,
    password,
    selectedGroup,
    selectedBranch,
    isActive,
    onUserNumberChange,
    onUsernameChange,
    onPasswordChange,
    onGroupPress,
    onBranchPress,
    onActiveChange,
    styles
}) => (
    <View style={styles.form}>
        <View style={styles.row}>
            <View style={styles.halfInput}>
                <Text style={styles.label}>User Number *</Text>
                <Input
                    placeholder="10"
                    value={userNumber}
                    onChangeText={onUserNumberChange}
                    keyboardType="numeric"
                    containerStyle={styles.inputContainer}
                />
            </View>

            <View style={styles.halfInput}>
                <Text style={styles.label}>Username *</Text>
                <Input
                    placeholder="pos"
                    value={username}
                    onChangeText={onUsernameChange}
                    containerStyle={styles.inputContainer}
                />
            </View>
        </View>

        <View style={styles.fullInput}>
            <Text style={styles.label}>User Group *</Text>
            <TouchableOpacity
                style={styles.dropdownButton}
                onPress={onGroupPress}
            >
                <Text style={[
                    styles.dropdownText,
                    !selectedGroup && styles.placeholderText
                ]}>
                    {selectedGroup ? selectedGroup.GroupEnName : 'Select Group'}
                </Text>
                <Text style={styles.dropdownArrow}>▼</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.fullInput}>
            <Text style={styles.label}>Password *</Text>
            <Input
                placeholder="••••"
                value={password}
                onChangeText={onPasswordChange}
                secureTextEntry
                containerStyle={styles.inputContainer}
            />
        </View>

        <View style={styles.fullInput}>
            <Text style={styles.label}>Branch *</Text>
            <TouchableOpacity
                style={styles.dropdownButton}
                onPress={onBranchPress}
            >
                <Text style={[
                    styles.dropdownText,
                    !selectedBranch && styles.placeholderText
                ]}>
                    {selectedBranch ? selectedBranch.BranchNameEn : 'Select Branch'}
                </Text>
                <Text style={styles.dropdownArrow}>▼</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.switchRow}>
            <Text style={styles.switchLabel}>Active</Text>
            <Switch
                value={isActive}
                onValueChange={onActiveChange}
                trackColor={{ false: COLORS.lightGray, true: COLORS.primary }}
                thumbColor={isActive ? COLORS.white : COLORS.gray}
            />
        </View>
    </View>
);

export default UserForm;
