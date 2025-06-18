import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../utils/constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    scrollContainer: {
        flex: 1,
    }, content: {
        padding: SIZES.padding,
    },
    form: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SIZES.margin,
    },
    halfInput: {
        flex: 0.48,
    },
    fullInput: {
        marginBottom: SIZES.margin,
    },
    label: {
        fontSize: SIZES.fontSize?.medium || 16,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 8,
    },
    inputContainer: {
        marginBottom: 0,
    },
    dropdownButton: {
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    dropdownText: {
        fontSize: SIZES.fontSize?.medium,
        color: COLORS.text,
    },
    placeholderText: {
        color: COLORS.gray,
    },
    dropdownArrow: {
        fontSize: 12,
        color: COLORS.gray,
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: SIZES.margin * 2,
        paddingVertical: 8,
    },
    switchLabel: {
        fontSize: SIZES.fontSize?.medium || 16,
        fontWeight: '600',
        color: COLORS.text,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SIZES.margin,
    },
    saveButton: {
        flex: 0.48,
        backgroundColor: COLORS.primary
    },
    cancelButton: {
        flex: 0.48,
        backgroundColor: COLORS.secondary,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalBackdrop: {
        flex: 1,
    },
    bottomSheet: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingTop: 20,
        maxHeight: '70%',
    },
    bottomSheetHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    bottomSheetTitle: {
        fontSize: SIZES.fontSize?.large || 18,
        fontWeight: 'bold',
        color: COLORS.text,
    },
    closeButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: COLORS.lightGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeButtonText: {
        fontSize: 18,
        color: COLORS.text,
    },
    groupList: {
        maxHeight: 300,
    },
    groupItem: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    selectedGroupItem: {
        backgroundColor: COLORS.primary,
    },
    groupItemText: {
        fontSize: SIZES.fontSize?.medium,
        fontWeight: '600',
        color: COLORS.text,
        marginBottom: 4,
    },
    groupItemSubText: {
        fontSize: SIZES.fontSize?.small,
        color: COLORS.gray,
    }, selectedGroupText: {
        color: COLORS.white,
    },
    loadingContainer: {
        padding: 20,
        alignItems: 'center',
    },
    loadingText: {
        fontSize: SIZES.fontSize?.medium,
        color: COLORS.gray,
    },
});
export default styles;
