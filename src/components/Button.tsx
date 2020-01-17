/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
    title: string;
}

export class Button extends React.Component<ButtonProps> {
    render() {
        const { title } = this.props;
        return (
            <TouchableOpacity style={styles.container} activeOpacity={0.8}>
                <Text style={styles.titleProps}>{title}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EF3651',
        borderRadius: 25,
        height: 48,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleProps: {
        fontSize: 14,
        lineHeight: 20,
        color: '#F5F5F5',
        textTransform: 'uppercase',
    },
});
