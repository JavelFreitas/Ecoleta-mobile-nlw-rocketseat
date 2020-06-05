import React, {useState} from 'react';
import { View, Image, ImageBackground, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import styles from '../Home/styles';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
    const [uf, setUf] = useState('');
    const [city, setCity] = useState('');


    function handleNavigateToPoints() {
        navigation.navigate('Points', {
            uf,
            city,
        });
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ImageBackground
                source={require('../../assets/home-background.png')}
                style={styles.container}
                imageStyle={{ width: 274, height: 278 }}
            >
                <View style={styles.main}>
                    <Image source={require('../../assets/logo.png')} />
                    <View>
                        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
                        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</Text>
                    </View>
                </View>

                <View style={styles.footer}>
                    <TextInput 
                    style={styles.input} 
                    placeholder="Digite a UF"
                    value={uf}
                    maxLength={2}
                    autoCapitalize='characters'
                    autoCorrect={false}
                    onChangeText={setUf}
                    >

                    </TextInput>
                    <TextInput 
                    style={styles.input} 
                    placeholder="Digite a Cidade"
                    value={city}
                    autoCorrect={false}
                    onChangeText={setCity}
                    >

                    </TextInput>

                    <RectButton style={styles.button} onPress={handleNavigateToPoints}>
                        <View style={styles.buttonIcon}>
                            <Icon name="arrow-right" color="#FFF" size={24} />
                        </View>
                        <Text style={styles.buttonText}>
                            Entrar
                    </Text>
                    </RectButton>

                </View>
            </ImageBackground>
        </KeyboardAvoidingView>
    );
};

export default Home;