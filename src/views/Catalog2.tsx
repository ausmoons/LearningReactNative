/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Toolbar, SearchToolbar } from '../components';


export default class Catalog2 extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',                
                alignItems: 'stretch',
                backgroundColor: 'black'
              }}>


             <SearchToolbar title={'Categories'} />  

 
               <Toolbar/>  
         </View>
        );
    }
}

const styles = StyleSheet.create({
    redContainer:{
        backgroundColor: '#FF3E3E',
        flex: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
    },
    otherContainers:{
        backgroundColor: '#2A2C36',
        flex: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
    },
    upperContainer:{ 
        flex:0.25,
        flexDirection: 'row', 
        backgroundColor: '#1E1F28',
        justifyContent: 'space-around'
        },
     textContainer:{ 
        flex: 1,
         alignItems: 'center',
           justifyContent: 'center'
            },
     text: {
            color: 'white',
            fontSize: 20,
        },
     containerText: {
            color: 'white',
            fontSize: 20,
        },




});
