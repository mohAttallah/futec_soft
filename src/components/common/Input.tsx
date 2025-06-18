import React from 'react';
import {
    TextInput,
    StyleSheet,
    TextInputProps,
    View,
} from 'react-native';
import { COLORS, SIZES } from '../../utils/constants';

interface InputProps extends TextInputProps {
    containerStyle?: object;
}

const Input: React.FC<InputProps> = ({
    containerStyle,
    style,
    ...props
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                style={[styles.input, style]}
                placeholderTextColor={COLORS.placeholder}
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: SIZES.margin,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: SIZES.borderRadius,
        paddingHorizontal: SIZES.padding,
        fontSize: SIZES.fontSize.medium,
        backgroundColor: COLORS.white,
        color: COLORS.text,
        textAlign: 'left',
    },
});

export default Input;
