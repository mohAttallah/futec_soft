import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ManageUsersScreen from '../screens/users/ManageUsersScreen';
import AddUserScreen from '../screens/users/AddUserScreen';
import { COLORS } from '../utils/constants';

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: COLORS.primary },
                headerTintColor: COLORS.white,
                headerTitleStyle: { fontWeight: 'bold' },
            }}
        >
            <Stack.Screen
                name="ManageUsers"
                component={ManageUsersScreen}
                options={{
                    title: 'Welcome',
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="AddUser"
                component={AddUserScreen}
                options={{ title: 'Add New User' }}
            />
        </Stack.Navigator>
    );
};

export default AppNavigator;
