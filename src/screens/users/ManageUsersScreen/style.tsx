import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../utils/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray,
    },
    content: {
        flex: 1,
        padding: SIZES.padding,
    },
    searchSection: {
        marginBottom: SIZES.margin,
    },
    searchInput: {
        marginBottom: SIZES.margin,
    },
    addButton: {
        backgroundColor: COLORS.primary,
        marginBottom: SIZES.margin,
    },
    usersList: {
        flex: 1,
    },
    userCard: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.borderRadius,
        padding: SIZES.padding,
        marginBottom: SIZES.margin,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    userCardContent: {
        marginBottom: SIZES.margin,
    },
    userInfo: {
        flex: 1,
    },
    userHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.margin / 2,
    },
    username: {
        fontSize: SIZES.fontSize.large,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    statusBadge: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        minWidth: 60,
        alignItems: 'center',
    },
    activeBadge: {
        backgroundColor: '#e8f5e8',
    },
    inactiveBadge: {
        backgroundColor: '#ffe8e8',
    },
    statusText: {
        fontSize: SIZES.fontSize.small,
        fontWeight: '600',
    },
    activeText: {
        color: COLORS.success,
    },
    inactiveText: {
        color: COLORS.danger,
    },
    userEmail: {
        fontSize: SIZES.fontSize.medium,
        color: COLORS.darkGray,
        marginBottom: 4,
    },
    userRole: {
        fontSize: SIZES.fontSize.medium,
        color: COLORS.primary,
        marginBottom: 4,
    },
    lastLogin: {
        fontSize: SIZES.fontSize.small,
        color: COLORS.darkGray,
    },    userActions: {
        marginTop: SIZES.margin,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    actionButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: SIZES.borderRadius,
        minWidth: 100,
        alignItems: 'center',
        marginHorizontal: 4,
    },
    toggleButton: {
        backgroundColor: COLORS.accent,
    },
    editButton: {
        backgroundColor: COLORS.primary,
    },
    deleteButtonSmall: {
        backgroundColor: COLORS.danger,
    },
    actionButtonText: {
        color: COLORS.white,
        fontSize: SIZES.fontSize.small,
        fontWeight: '600',
    },
    paginationContainer: {
        paddingVertical: SIZES.padding,
        borderTopWidth: 1,
        borderTopColor: COLORS.lightGray,
        backgroundColor: COLORS.white,
    },
    paginationInfo: {
        alignItems: 'center',
        marginBottom: SIZES.margin,
    },
    paginationText: {
        fontSize: SIZES.fontSize.medium,
        color: COLORS.text,
        marginBottom: 4,
    },
    paginationButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: SIZES.margin,
    },
    paginationButton: {
        paddingHorizontal: 24,
        paddingVertical: 12,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.borderRadius,
        minWidth: 80,
        alignItems: 'center',
    },
    disabledButton: {
        backgroundColor: COLORS.lightGray,
    },
    paginationButtonText: {
        color: COLORS.white,
        fontSize: SIZES.fontSize.medium,
        fontWeight: '600',
    },
    disabledButtonText: {
        color: COLORS.darkGray,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SIZES.padding * 2,
    },
    emptyText: {
        fontSize: SIZES.fontSize.large,
        color: COLORS.darkGray,
        textAlign: 'center',
    },
    
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.padding,
    },
    modalContent: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.borderRadius * 2,
        width: '100%',
        maxWidth: 400,
        maxHeight: '80%',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: SIZES.padding,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    modalTitle: {
        fontSize: SIZES.fontSize.xlarge,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    closeButton: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: COLORS.lightGray,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        fontSize: 20,
        color: COLORS.darkGray,
        fontWeight: 'bold',
    },
    modalBody: {
        padding: SIZES.padding,
    },
    detailRow: {
        marginBottom: SIZES.margin,
        paddingBottom: SIZES.margin / 2,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    detailLabel: {
        fontSize: SIZES.fontSize.medium,
        fontWeight: '600',
        color: COLORS.darkGray,
        marginBottom: 4,
    },
    detailValue: {
        fontSize: SIZES.fontSize.medium,
        color: COLORS.text,
    },
    modalActions: {
        marginTop: SIZES.margin,
        gap: SIZES.margin / 2,
    },
    modalButton: {
        paddingVertical: 12,
    },
    toggleModalButton: {
        backgroundColor: COLORS.accent,
    },
    deleteButton: {
        backgroundColor: '#d32f2f',
    },
    
    editForm: {
        padding: SIZES.padding,
    },
    editInput: {
        marginBottom: SIZES.margin,
    },
    statusSelector: {
        marginBottom: SIZES.margin,
    },
    statusLabel: {
        fontSize: SIZES.fontSize.medium,
        fontWeight: '600',
        color: COLORS.darkGray,
        marginBottom: SIZES.margin / 2,
    },
    statusOptions: {
        flexDirection: 'row',
        gap: SIZES.margin / 2,
    },
    statusOption: {
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: SIZES.borderRadius,
        backgroundColor: COLORS.lightGray,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    statusOptionActive: {
        backgroundColor: COLORS.primary,
        borderColor: COLORS.accent,
    },
    statusOptionText: {
        fontSize: SIZES.fontSize.medium,
        color: COLORS.darkGray,
        fontWeight: '600',
    },
    statusOptionTextActive: {
        color: COLORS.white,
    },
    saveButton: {
        backgroundColor: COLORS.success,
    },
    cancelButton: {
        backgroundColor: COLORS.darkGray,
        flex: 1,
    },
    
    deleteModalContent: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.borderRadius * 2,
        width: '90%',
        maxWidth: 350,
        padding: SIZES.padding,
    },
    deleteModalHeader: {
        alignItems: 'center',
        marginBottom: SIZES.margin,
    },
    deleteModalTitle: {
        fontSize: SIZES.fontSize.xlarge,
        fontWeight: 'bold',
        color: COLORS.danger,
    },
    deleteModalBody: {
        alignItems: 'center',
    },
    deleteModalText: {
        fontSize: SIZES.fontSize.medium,
        color: COLORS.text,
        textAlign: 'center',
        marginBottom: SIZES.margin / 2,
    },
    deleteModalWarning: {
        fontSize: SIZES.fontSize.small,
        color: COLORS.danger,
        textAlign: 'center',
        marginBottom: SIZES.margin * 2,
    },
    deleteModalActions: {
        flexDirection: 'row',
        gap: SIZES.margin,
        width: '100%',
    },
    confirmDeleteButton: {
        backgroundColor: COLORS.danger,
        flex: 1,
    },
});

export default styles;
