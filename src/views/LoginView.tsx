import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, SocialButtons, TextInput, AuthHelpButton } from '../components';

export default class LoginView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput placeholder={'Email'} />
                    <TextInput placeholder={'Password'} />
                    <AuthHelpButton title={'Forgot your password?'} />
                    <Button title={'Login'} />
                </View>
                <SocialButtons />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1F28',
        paddingHorizontal: 14,
        paddingBottom: 50,
    },
    title: {
        fontSize: 34,
        lineHeight: 34,
        color: '#F7F7F7',
    },
});
