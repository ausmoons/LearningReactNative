/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import IconA from 'react-native-vector-icons/FontAwesome';
import IconE from 'react-native-vector-icons/Entypo';
import IconF from 'react-native-vector-icons/Feather';
import IconS from 'react-native-vector-icons/SimpleLineIcons';
import IconM from 'react-native-vector-icons/MaterialIcons';


export class Toolbar extends React.Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end',}}>

             
               <View  style={styles.toolbarContainer}>  
                <View style={styles.iconContainer}>
                           <Text>  <IconE  name="home" size={30} color="white" /> </Text>
                           <Text>  <IconF name="shopping-cart" size={30} color="white" /> </Text>
                           <Text>  <IconS name="handbag" size={30} color="white" /> </Text>
                           <Text>  <IconA name="heart-o" size={30} color="white" /> </Text>
                           <Text>  <IconM name="person-outline" size={35} color="white" /> </Text>  
                        
                 </View>
                 <View style={styles.textContainer}>
                           <Text style={styles.text} >Home</Text>
                           <Text style={styles.text}>       Shop</Text>
                           <Text style={styles.text}>        Bag</Text>
                           <Text style={styles.text}>     Favorites</Text>
                           <Text style={styles.text}> Profile</Text>  
                 </View>       
             </View>               
           
         </View>
        );
    }
}

const styles = StyleSheet.create({
   toolbarContainer:{
   height: 70, 
    flexDirection: 'column', 
    backgroundColor: '#1E1F28',
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    
   },
    iconContainer: {
        height:40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingHorizontal:20,   
    },
    textContainer: {
        height:30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:20,     
        paddingTop: 5,  
 
    },
    text: {
        color: 'white',
    },

});
