/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { TextInput as RNTextInput, StyleSheet, View, TextInputProps as RNTextInputProps, Text } from 'react-native';

interface TextInputProps extends RNTextInputProps {
    isValid: boolean;
}

export class TextInput extends React.Component<TextInputProps> {
    render() {
        const { placeholder, value, isValid } = this.props;
        return (
            <View>
                <View style={[styles.container, isValid ? false : styles.error]}>
                    <Text style={styles.placeholder}>{placeholder}</Text>
                    <RNTextInput style={{ padding: 0, color: 'white' }} value={value} />
                </View>
                {!isValid && <Text style={styles.invalidText}>Input is invalid!</Text>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2A2C36',
        borderRadius: 4,
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginBottom: 8,
    },
    placeholder: {
        fontSize: 11,
        color: '#ABB4BD',
    },
    error: {
        borderColor: '#FF2424',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    invalidText: {
        fontSize: 11,
        color: 'red',
    },
});
