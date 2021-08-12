import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Card} from "react-native-paper"
import Icon from "react-native-vector-icons/Ionicons"
const Account = () => {
    return (
        <View style={{flex:1,backgroundColor:"#fff"}}>
         <View style={{alignItems:"center",marginTop:10}}>
             <LinearGradient 
              colors={["#9c27b0", "#ec407a"]}
             style={{height:82,width:104,borderRadius:16}}>
                 <Text style={{fontSize:28,marginTop:15,
                    textAlign:"center",fontWeight:"bold",color:"#fff"}}>Lumi</Text>
                  
             </LinearGradient>
             <Text style={{marginTop:5,fontWeight:"bold",fontSize:19}}>Lumi</Text>
             <Text style={{marginTop:2,fontWeight:"bold",fontSize:15}}>1.0.4611</Text>
         </View>
         <View style={{flexDirection:"row" ,justifyContent: 'space-between',
                    height:40,marginTop:10,marginHorizontal:10,backgroundColor:"#eeeeee",borderRadius:10}}>
                   <Text style={{paddingTop:8,marginLeft:8,fontSize:16,fontWeight:"bold",}}>Privacy Policy</Text>
                <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
               </View>
               <View style={{flexDirection:"row" ,justifyContent: 'space-between',
                    height:40,marginTop:10,marginHorizontal:10,backgroundColor:"#eeeeee",borderRadius:10}}>
                   <Text style={{paddingTop:8,marginLeft:8,fontSize:16,fontWeight:"bold",}}>Terms of Use</Text>
                <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
               </View>
               <View style={{flexDirection:"row" ,justifyContent: 'space-between',
                    height:40,marginTop:10,marginHorizontal:10,backgroundColor:"#eeeeee",borderRadius:10}}>
                   <Text style={{paddingTop:8,marginLeft:8,fontSize:16,fontWeight:"bold",}}>Contact Us</Text>
                <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
               </View>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({})
