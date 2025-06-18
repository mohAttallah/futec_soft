import React from 'react';
import { Modal, View, Text, TouchableOpacity, ScrollView, Pressable } from 'react-native';
import { GroupBottomSheetProps } from './types/user.types';

const GroupBottomSheet: React.FC<GroupBottomSheetProps> = ({
    visible,
    onClose,
    title,
    userGroups,
    selectedGroup,
    onSelectGroup,
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
                    {userGroups.map((group) => (
                        <TouchableOpacity
                            key={group.GroupId}
                            style={[
                                styles.groupItem,
                                selectedGroup?.GroupId === group.GroupId && styles.selectedGroupItem
                            ]}
                            onPress={() => onSelectGroup(group)}
                        >
                            <Text style={[
                                styles.groupItemText,
                                selectedGroup?.GroupId === group.GroupId && styles.selectedGroupText
                            ]}>
                                {group.GroupEnName}
                            </Text>
                            <Text style={[
                                styles.groupItemSubText,
                                selectedGroup?.GroupId === group.GroupId && styles.selectedGroupText
                            ]}>
                                {group.GroupArName}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    </Modal>
);

export default GroupBottomSheet;
