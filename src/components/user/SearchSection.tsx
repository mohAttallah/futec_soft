import React from 'react';
import { View } from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';
import { SearchSectionProps } from './types/user.types';

const SearchSection: React.FC<SearchSectionProps> = ({ 
    searchQuery, onSearchChange, onAddUser, styles 
}) => (
    <View style={styles.searchSection}>
        <Input
            placeholder="Search users..."
            value={searchQuery}
            onChangeText={onSearchChange}
            containerStyle={styles.searchInput}
        />

        <Button
            title="Add New User"
            onPress={onAddUser}
            style={styles.addButton}
        />
    </View>
);

export default SearchSection;
