import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../utils/constants'

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: SIZES.padding,
    },
    content: {
        flexDirection: 'column',
        width: '100%',
        maxWidth: 900,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.borderRadius * 2,
        overflow: 'hidden',
        minHeight: 400,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
    },
    logoSection: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
        padding: SIZES.padding * 2,
    },
    logoText: {
        color: COLORS.white,
        fontSize: SIZES.fontSize.xlarge,
        fontWeight: 'bold',
    },
    formSection: {
        flex: 1,
        backgroundColor: COLORS.formBackground,
    },
    formContainer: {
        flex: 1,
        padding: SIZES.padding * 2,
        justifyContent: 'center',
    },
    title: {
        fontSize: SIZES.fontSize.xlarge,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: SIZES.margin / 2,
    },
    subtitle: {
        fontSize: SIZES.fontSize.medium,
        color: COLORS.darkGray,
        marginBottom: SIZES.margin * 2,
    },
    form: {
        width: '100%',
    },
    inputContainer: {
        marginBottom: SIZES.margin,
    },
    loginButton: {
        backgroundColor: COLORS.primary,
        marginTop: SIZES.margin,
        paddingVertical: 15,
    },
});
export default styles;