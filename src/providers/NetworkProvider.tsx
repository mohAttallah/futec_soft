import React, { createContext, useContext, ReactNode } from 'react';
import { useNetworkConnectivity } from '../hooks/useNetworkConnectivity';
import NoInternet from '../components/common/NoInternet';

interface NetworkContextType {
  isConnected: boolean;
  isInternetReachable: boolean | null;
  type: string | null;
  isOffline: boolean;
  checkConnectivity: () => Promise<boolean>;
}

const NetworkContext = createContext<NetworkContextType | undefined>(undefined);

interface NetworkProviderProps {
  children: ReactNode;
}

export const NetworkProvider: React.FC<NetworkProviderProps> = ({ children }) => {
  const networkState = useNetworkConnectivity();

  const handleRetry = async () => {
    await networkState.checkConnectivity();
  };

  if (networkState.isOffline) {
    return <NoInternet onRetry={handleRetry} />;
  }

  return (
    <NetworkContext.Provider value={networkState}>
      {children}
    </NetworkContext.Provider>
  );
};

export const useNetwork = () => {
  const context = useContext(NetworkContext);
  if (context === undefined) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }
  return context;
};
