import React from 'react'
import { TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"

const HomePage = ({navigation}) => {
    return (
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
           <View style={{alignItems: 'center'}}>
               <Text style={{fontSize:18,fontWeight: 'bold',marginTop:35}}>Settings</Text>
           </View>
           <View>
               <View style={{flexDirection:"row" ,justifyContent: 'space-between',
                    height:40,marginTop:10,marginHorizontal:10,backgroundColor:"#eeeeee",borderRadius:10}}>
                   <Text style={{paddingTop:8,marginLeft:8,fontSize:16,fontWeight:"bold",}}>Blocked Lists</Text>
                <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
               </View>
               <View style={{flexDirection:"row" ,justifyContent: 'space-between',
                    height:40,marginTop:10,marginHorizontal:10,backgroundColor:"#eeeeee",borderRadius:10}}>
                   <Text style={{paddingTop:8,marginLeft:8,fontSize:16,fontWeight:"bold",}}>Feedback</Text>
                <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
               </View>
               <View style={{flexDirection:"row" ,justifyContent: 'space-between',
                    height:40,marginTop:10,marginHorizontal:10,backgroundColor:"#eeeeee",borderRadius:10}}>
                   <Text style={{paddingTop:8,marginLeft:8,fontSize:16,fontWeight:"bold",}}>Rate us</Text>
                <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
               </View>
               <TouchableOpacity onPress={()=>navigation.navigate("AboutPage")}>
               <View style={{flexDirection:"row" ,justifyContent: 'space-between',
                    height:40,marginTop:10,marginHorizontal:10,backgroundColor:"#eeeeee",borderRadius:10}}>
                   <Text style={{paddingTop:8,marginLeft:8,fontSize:16,fontWeight:"bold",}}>About us</Text>
                <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
               </View>
               
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigation.navigate("EditProfilePage")}>
               <View style={{flexDirection:"row" ,justifyContent: 'space-between',
                    height:40,marginTop:10,marginHorizontal:10,backgroundColor:"#eeeeee",borderRadius:10}}>
                   <Text style={{paddingTop:8,marginLeft:8,fontSize:16,fontWeight:"bold",}}>Edit Profile</Text>
                <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
               </View>
               
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigation.navigate("chatPrice")}>
               <View style={{flexDirection:"row" ,justifyContent: 'space-between',
                    height:40,marginTop:10,marginHorizontal:10,backgroundColor:"#eeeeee",borderRadius:10}}>
                        
                   <Text style={{paddingTop:8,marginLeft:8,fontSize:16,fontWeight:"bold",}}>Share</Text>
                
                <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
               </View>
               </TouchableOpacity>
               <View style={{marginTop:20,alignItems:"center"}}>
                   <LinearGradient 
                    colors={["#9c27b0", "#ec407a"]}
                   style={{height:45,width:"70%",
                   borderRadius:18,}}>
                       <Text style={{textAlign:"center",
                       color:"white",
                       paddingTop:10,fontSize:18,fontWeight:"bold"}}>LOGOUT</Text>
                   </LinearGradient>
               </View>
           </View>
        </View>
    )
}

export default HomePage

const styles = StyleSheet.create({})
