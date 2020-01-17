/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, View, StyleSheet, Text, Image, ImageBackground } from 'react-native';
import { Toolbar, SearchToolbar } from '../components';


export default class Categories extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',                
                alignItems: 'stretch',
                backgroundColor: 'black'
              }}>


             <SearchToolbar title={'Categories'} />  
             <View style={styles.upperContainer}>
                <Text style={styles.text}>Women</Text>
                <Text style={styles.text}>Men</Text>
                <Text style={styles.text}>Kids</Text>
             </View>
                 
                
            <TouchableOpacity style={styles.redContainer} activeOpacity={0.8}>
                <Text >Summer sales</Text>
                <Text >Up to 50% off</Text>
            </TouchableOpacity>

           
               


            <TouchableOpacity style={styles.otherContainers} activeOpacity={0.8}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.textContainer}> 
                        <Text style={styles.containerText} >New</Text>
                    </View>
                    <View style={{ flex: 1}}>
                        <ImageBackground style={{width:'100%', height: '100%'}} source={require('../assets/image4.1.png')}  >
                        </ImageBackground>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.otherContainers} activeOpacity={0.8}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.textContainer}> 
                        <Text style={styles.containerText} >Clothes</Text>
                    </View>
                    <View style={{ flex: 1}}>
                        <ImageBackground style={{width:'100%', height: '100%'}} source={require('../assets/image.png')}  >
                        </ImageBackground>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.otherContainers} activeOpacity={0.8}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.textContainer}> 
                        <Text style={styles.containerText} >Shoes</Text>
                    </View>
                    <View style={{ flex: 1}}>
                        <ImageBackground style={{width:'100%', height: '100%'}} source={require('../assets/imageFeet.png')}  >
                        </ImageBackground>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.otherContainers} activeOpacity={0.8}>
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <View style={styles.textContainer}> 
                        <Text style={styles.containerText} >Accesories</Text>
                    </View>
                    <View style={{ flex: 1}}>
                        <ImageBackground style={{width:'100%', height: '100%'}} source={require('../assets/imageNeck.png')}  >
                        </ImageBackground>
                    </View>
                </View>
            </TouchableOpacity>

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
