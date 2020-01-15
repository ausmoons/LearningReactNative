/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, SocialButtons, TextInput, AuthHelpButton } from '../components';

export default class SignUpView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>Sign Up</Text>
                    <TextInput placeholder={'Name'} />
                    <TextInput placeholder={'Email'} />
                    <TextInput placeholder={'Password'} />
                    <AuthHelpButton title={'Already have an account?'} />
                    <Button title={'Sign Up'} />
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
