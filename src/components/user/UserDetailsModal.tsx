import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { UserModalProps } from './types/user.types';

const UserDetailsModal: React.FC<UserModalProps> = ({ visible, user, onClose, styles }) => (
    <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}
    >
        <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
                <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>User Details</Text>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={onClose}
                    >
                        <Text style={styles.closeButtonText}>×</Text>
                    </TouchableOpacity>
                </View>
                
                {user && (
                    <View style={styles.modalBody}>
                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Username:</Text>
                            <Text style={styles.detailValue}>{user.UserName}</Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>User No:</Text>
                            <Text style={styles.detailValue}>{user.UserNo}</Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Role (English):</Text>
                            <Text style={styles.detailValue}>{user.GroupEnName}</Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Role (Arabic):</Text>
                            <Text style={styles.detailValue}>{user.GroupArName}</Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Status:</Text>
                            <Text style={[
                                styles.detailValue,
                                user.IsActive ? styles.activeText : styles.inactiveText
                            ]}>
                                {user.IsActive ? 'Active' : 'Inactive'}
                            </Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Branch:</Text>
                            <Text style={styles.detailValue}>{user.BranchDesc}</Text>
                        </View>

                        <View style={styles.detailRow}>
                            <Text style={styles.detailLabel}>Group Type:</Text>
                            <Text style={styles.detailValue}>{user.GroupType}</Text>
                        </View>
                    </View>
                )}
            </View>
        </View>
    </Modal>
);

export default UserDetailsModal;
