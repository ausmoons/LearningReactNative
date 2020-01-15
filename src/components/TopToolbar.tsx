/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import IconAnt from 'react-native-vector-icons/AntDesign';



export class TopToolbar extends React.Component {
    render() {

        return (
            <TouchableOpacity style={styles.container} activeOpacity={0.8}>
                  <Text>  <IconAnt  name="left" size={20} color="white" /> </Text>
                <Text>  <IconAnt  name="search1" size={20} color="white" /> </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1E1F28',
        height: 48,
        alignItems: 'center',
    },
    titleProps: {
        fontSize: 20,
        lineHeight: 20,
        color: '#F7F7F7',
    },
});
