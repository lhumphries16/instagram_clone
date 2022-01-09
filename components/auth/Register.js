import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import firebase from 'firebase/compat/app'
import { getAuth, createUserWithEmailAndPassword, applyActionCode } from "firebase/auth";
import { getApplication } from 'react-native-web/dist/cjs/exports/AppRegistry/renderApplication';
import { createNativeWrapper } from 'react-native-gesture-handler';

export class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
        const auth = getAuth();
        const { email, password, name } = this.state
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {

            FriendlyEats.prototype.addRestaurant = function(data) {
            // Signed in 
                var collection = firebase.firestore().collection("users");
                collection.add(data)
            }
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error.message)
            // ..
        }); //will trigger after we get a response from the firebase server
            
        }


    render() {
        return (
            <View>
                <TextInput
                    placeholder='name'
                    onChangeText={(name) => this.setState({ name })}
                />
                <TextInput
                    placeholder='email'
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    title="Sign-up"
                    onPress={() => this.onSignUp()}
                />
            </View>
        )
    }
}

export default Register
