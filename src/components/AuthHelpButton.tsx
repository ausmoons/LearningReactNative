/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

interface AuthHelpButtonProps {
    title: string;
}

export class AuthHelpButton extends React.Component<AuthHelpButtonProps> {
    render() {
        const { title } = this.props;
        return (
            <TouchableOpacity style={{ marginTop: 14, marginBottom: 26 }}>
                <Text style={{ color: '#F7F7F7', fontSize: 14, textAlign: 'right' }}>
                    {title}
                    <Image style={{ marginLeft: 24 }} source={require('../assets/arrow-right.png')} />
                </Text>
            </TouchableOpacity>
        );
    }
}
