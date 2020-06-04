import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import styles from './styles'
import { useNavigation } from '@react-navigation/native'

const Points = () => {
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigateBack} >
                <Icon name="arrow-left" size={20} color="#34cd79" />
            </TouchableOpacity>

            <Text style={styles.title}></Text>

        </View>
    )
};

export default Points;