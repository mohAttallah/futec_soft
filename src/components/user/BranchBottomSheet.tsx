import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { BranchBottomSheetProps } from './types/user.types';

const BranchBottomSheet: React.FC<BranchBottomSheetProps> = ({
    visible,
    onClose,
    title,
    branches,
    selectedBranch,
    onSelectBranch,
    styles
}) => (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
    >
        <View style={styles.modalOverlay}>
            <Pressable
                style={styles.modalBackdrop}
                onPress={onClose}
            />
            <View style={styles.bottomSheet}>
                <View style={styles.bottomSheetHeader}>
                    <Text style={styles.bottomSheetTitle}>{title}</Text>
                    <TouchableOpacity
                        onPress={onClose}
                        style={styles.closeButton}
                    >
                        <Text style={styles.closeButtonText}>×</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.groupList}>
                    {branches.map((branch) => (
                        <TouchableOpacity
                            key={branch.BranchId}
                            style={[
                                styles.groupItem,
                                selectedBranch?.BranchId === branch.BranchId && styles.selectedGroupItem
                            ]}
                            onPress={() => onSelectBranch(branch)}
                        >
                            <Text style={[
                                styles.groupItemText,
                                selectedBranch?.BranchId === branch.BranchId && styles.selectedGroupText
                            ]}>
                                {branch.BranchNameEn}
                            </Text>
                            <Text style={[
                                styles.groupItemSubText,
                                selectedBranch?.BranchId === branch.BranchId && styles.selectedGroupText
                            ]}>
                                {branch.BranchNameAr}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    </Modal>
);

export default BranchBottomSheet;
