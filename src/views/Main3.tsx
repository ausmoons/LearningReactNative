/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { Toolbar } from '../components';


export default class Main3 extends React.Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',                
                alignItems: 'stretch',
              }}>

              <View style={{flex:3,}}>
                <ImageBackground source={require('../assets/image3.png')} style={{width:'100%', height: '100%'}}>
                     <Text style={styles.upperText}>New collection</Text>
                </ImageBackground>
              </View>

                <View style={{ flex: 3,flexDirection: 'row'}}> 
                   <View style={{flex:0.6, flexDirection: 'column',}}>
                        <View style={{flex: 0.5, flexDirection: 'column'}}>
                                <ImageBackground style={{width:'100%', height: '100%',  backgroundColor: '#1E1F28',}}  >
                                    <Text style={styles.pinkText}>Summer sale</Text>
                                </ImageBackground>
                          </View>
                        
                       <View style={{flex: 0.5, flexDirection: 'column'}}>
                         <ImageBackground style={{width:'100%', height: '110%'}} source={require('../assets/imageLeft.png')}  >
                            <Text style={styles.lowerText}>Black</Text>
                         </ImageBackground>
                    </View>
                   </View>
                    <View style={{flex: 0.6, flexDirection: 'column'}}>
                         <ImageBackground style={{width:'100%', height: '105%'}} source={require('../assets/imageRight.png')}  >
                            <Text style={styles.hatText}>Men's hats</Text>
                         </ImageBackground>
                    </View>
               </View>    
               <Toolbar/>  
         </View>
        );
    }
}

const styles = StyleSheet.create({
    upperText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'right',
        fontSize: 30, 
        textAlignVertical: 'bottom',
    },
    pinkText: {
        color: '#EF3651',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30, 
        textAlignVertical: 'bottom',
    },
    lowerText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30, 
        textAlignVertical: 'bottom',
    },
    hatText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 30, 
        textAlignVertical: 'bottom',
    },



});
