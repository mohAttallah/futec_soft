import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNetwork } from '../../providers/NetworkProvider';

interface NetworkStatusBarProps {
  showWhenConnected?: boolean;
}

const NetworkStatusBar: React.FC<NetworkStatusBarProps> = ({ 
  showWhenConnected = false 
}) => {
  const { isConnected, isInternetReachable, type } = useNetwork();

  const isOffline = !isConnected || isInternetReachable === false;

  if (!isOffline && !showWhenConnected) {
    return null;
  }

  const getStatusInfo = () => {
    if (isOffline) {
      return {
        message: 'No Internet Connection',
        backgroundColor: '#dc3545',
        textColor: '#ffffff',
      };
    }
    
    return {
      message: `Connected via ${type?.toUpperCase()}`,
      backgroundColor: '#28a745',
      textColor: '#ffffff',
    };
  };

  const statusInfo = getStatusInfo();

  return (
    <View style={[styles.container, { backgroundColor: statusInfo.backgroundColor }]}>
      <Text style={[styles.text, { color: statusInfo.textColor }]}>
        {statusInfo.message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default NetworkStatusBar;
