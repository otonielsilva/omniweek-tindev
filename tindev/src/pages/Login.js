import React, {useState, useEffect} from 'react'
 
import AsyncStorage from '@react-native-community/async-storage'
import { View, Text, Image, Plataform, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import logo from '../assets/logo.png';
import api from '../services/api';


export default function Login ({ navigation }) {
    const [ user, setUser] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            navigation.navigate('Main', {user})
        })
    }),[] ;

    async function handleLogin () {
        console.log("teste");

         const response = await  api.post("/devs", {
            username: user 
        });


        await AsyncStorage.setItem('user', _id);
        const { _id } = response.data

        

        navigation.navigate('Main', { _id });  
    }


    return <View style={style.container}>
      <Image source={logo} /> 
      <TextInput style={style.input} 
       autoCorrect={false}
       autoCapitalize="none"
       placeholder="Digite seu usuario no github" 
       placeholderTextColor="#999"
       onChangeText={setUser} />
      <TouchableOpacity style={style.button} onPress={handleLogin}  >
          <Text style={style.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30
    },
    input: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15

    },
    button : {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#Df4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    buttonText : {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});