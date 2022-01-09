import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

        this.onSignUp = this.onSignUp.bind(this)
    }

    onSignUp(){
        const auth = getAuth();
        const { email, password } = this.state

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(userCredential)
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
                    placeholder='email'
                    onChangeText={(email) => this.setState({ email })}
                />
                <TextInput
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />
                <Button
                    title="Sign-in"
                    onPress={() => this.onSignUp()}
                />
            </View>
        )
    }
}

export default Login
