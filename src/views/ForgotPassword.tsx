import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button, TextInput } from '../components';

export default class ForgotPasswordView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>Forgot Password</Text>
                    <TextInput placeholder={'Email'} />
                    <Button title={'Send'} />
                </View>
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
