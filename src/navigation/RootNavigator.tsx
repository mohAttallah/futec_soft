import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useAuthInit } from '../hooks/useAuthInit';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';

const RootNavigator: React.FC = () => {
    const { isLoggedIn } = useSelector((state: RootState) => state.app);
    
    useAuthInit();

    return (
        <NavigationContainer>
            {   isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default RootNavigator;
