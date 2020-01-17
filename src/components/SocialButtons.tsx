/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

type ButtonProps = { img: ImageSourcePropType };

class Button extends React.Component<ButtonProps> {
    render() {
        return (
            <View style={buttonStyle.container}>
                <Image source={this.props.img} />
            </View>
        );
    }
}

const buttonStyle = StyleSheet.create({
    container: {
        width: 92,
        height: 64,
        backgroundColor: '#FFFFFF',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export class SocialButtons extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>Or sign up with social account</Text>
                <View style={style.buttons}>
                    <Button img={require('../assets/google.png')} />
                    <Button img={require('../assets/fb.png')} />
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 14,
        color: '#F7F7F7',
    },
    buttons: {
        width: '50%',
        flexDirection: 'row',
        marginTop: 12,
        justifyContent: 'space-between',
    },
});
