import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../utils/constants';

interface NoInternetProps {
    onRetry: () => void;
}

const NoInternet: React.FC<NoInternetProps> = ({ onRetry }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {/* WiFi Off Icon */}
                <View style={styles.iconContainer}>
                    <Text style={styles.icon}>📶</Text>
                    <View style={styles.slash} />
                </View>

                <Text style={styles.title}>No Internet Connection</Text>
                <Text style={styles.message}>
                    Please check your internet connection and try again.
                </Text>

                <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
                    <Text style={styles.retryButtonText}>Try Again</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    content: {
        alignItems: 'center',
        maxWidth: 300,
    },
    iconContainer: {
        position: 'relative',
        marginBottom: 30,
    },
    icon: {
        fontSize: 80,
        color: COLORS.lightGray,
    },
    slash: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 80,
        height: 3,
        backgroundColor: COLORS.accent,
        transform: [
            { translateX: -40 },
            { translateY: -1.5 },
            { rotate: '45deg' }
        ],
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.text,
        marginBottom: 16,
        textAlign: 'center',
    },
    message: {
        fontSize: 16,
        color: COLORS.darkGray,
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 40,
    },
    retryButton: {
        backgroundColor: COLORS.primary,
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 8,
        elevation: 2,
        shadowColor: COLORS.text,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    retryButtonText: {
        color: COLORS.white, fontSize: 16,
        fontWeight: '600',
    },
});

export default NoInternet;
