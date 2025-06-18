import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';
import { EditUserModalProps } from './types/user.types';

const EditUserModal: React.FC<EditUserModalProps> = ({
    visible, user, onClose, onSave, onInputChange, styles
}) => (
    <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}
    >
        <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>Edit User</Text>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onClose}
                    >
                        <Text style={styles.closeButtonText}>×</Text>
                    </TouchableOpacity>
                </View>

                {user && (
                    <View style={styles.modalBody}>
                        <View style={styles.editForm}>
                            <Input
                                placeholder="Username"
                                value={user.UserName}
                                onChangeText={(value) => onInputChange('UserName', value)}
                                containerStyle={styles.editInput}
                            />

                            <Input
                                placeholder="Password"
                                value={user.UserPassword}
                                onChangeText={(value) => onInputChange('UserPassword', value)}
                                containerStyle={styles.editInput}
                                secureTextEntry
                            />

                            <Input
                                placeholder="Branch"
                                value={user.Branch}
                                onChangeText={(value) => onInputChange('Branch', value)}
                                containerStyle={styles.editInput}
                            />

                            <View style={styles.statusSelector}>
                                <Text style={styles.statusLabel}>Status:</Text>
                                <View style={styles.statusOptions}>
                                    <TouchableOpacity
                                        style={[
                                            styles.statusOption,
                                            user.IsActive && styles.statusOptionActive
                                        ]}
                                        onPress={() => onInputChange('IsActive', true)}
                                    >
                                        <Text style={[
                                            styles.statusOptionText,
                                            user.IsActive && styles.statusOptionTextActive
                                        ]}>Active</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={[
                                            styles.statusOption,
                                            !user.IsActive && styles.statusOptionActive
                                        ]}
                                        onPress={() => onInputChange('IsActive', false)}
                                    >
                                        <Text style={[
                                            styles.statusOptionText,
                                            !user.IsActive && styles.statusOptionTextActive
                                        ]}>Inactive</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={styles.modalActions}>
                                <Button
                                    title="Cancel"
                                    onPress={onClose}
                                    style={[styles.modalButton, styles.cancelButton]}
                                />
                                <Button
                                    title="Save Changes"
                                    onPress={onSave}
                                    style={[styles.modalButton, styles.saveButton]}
                                />


                            </View>
                        </View>
                    </View>
                )}
            </View>
        </View>
    </Modal>
);

export default EditUserModal;
