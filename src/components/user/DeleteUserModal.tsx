import React from 'react';
import { Modal, View, Text } from 'react-native';
import Button from '../common/Button';
import { DeleteUserModalProps } from './types/user.types';

const DeleteUserModal: React.FC<DeleteUserModalProps> = ({ 
    visible, user, onClose, onConfirm, styles 
}) => (
    <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={onClose}
    >
        <View style={styles.modalOverlay}>
            <View style={styles.deleteModalContent}>
                <View style={styles.deleteModalHeader}>
                    <Text style={styles.deleteModalTitle}>Confirm Delete</Text>
                </View>
                
                {user && (
                    <View style={styles.deleteModalBody}>
                        <Text style={styles.deleteModalText}>
                            Are you sure you want to delete user "{user.UserName}"?
                        </Text>
                        <Text style={styles.deleteModalWarning}>
                            This action cannot be undone
                        </Text>
                        <View style={styles.deleteModalActions}>
                            <Button
                                title="Delete"
                                onPress={onConfirm}
                                style={[styles.modalButton, styles.confirmDeleteButton]}
                            />

                            <Button
                                title="Cancel"
                                onPress={onClose}
                                style={[styles.modalButton, styles.cancelButton]}
                            />
                        </View>
                    </View>
                )}
            </View>
        </View>
    </Modal>
);

export default DeleteUserModal;
