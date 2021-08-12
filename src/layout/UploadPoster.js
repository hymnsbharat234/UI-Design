import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {Card} from 'react-native-paper'
import Icon from "react-native-vector-icons/Ionicons"

const UploadPoster = () => {
    return (
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <View style={{alignItems:"center",marginTop:10}}>
                <Text style={{color:"#350f63",fontSize:20,fontWeight:"bold"}}>
                Upload a Poster
                </Text>
                <Card style={{width:200,height:300,backgroundColor:"#eeeeee",marginTop:10,alignItems:"center"}}>
                    <Card style={{width:70,height:70,marginTop:120,borderRadius:50}}>
                    <Icon name="add" size={55} color="#ab47bc" style={{paddingLeft:8,paddingTop:5}}/>
                    </Card>
                    

                </Card>
                <View style={{flexDirection:"row",marginTop:10}}>
                    <Card style={{height:75,width:60,margin:8}}>
                        <Image source={require("../../assets/e1.jpg" )} style={{height:75,width:60,borderRadius:5}}/>
                    </Card>
                    <Card style={{height:75,width:60,margin:8}}>
                    <Image source={require("../../assets/e2.jpg" )} style={{height:75,width:60,borderRadius:5}}/>
                    </Card>
                    <Card style={{height:75,width:60,margin:8}}>
                    <Image source={require("../../assets/e3.jpg" )} style={{height:75,width:60,borderRadius:5}}/>
                    </Card>
                </View>
                <View style={{marginTop:5,alignItems:"center"}}>
                    <Text>
                        Please upload a 
                        <Text style={{color:"#ab47bc"}}> clear</Text> and  <Text style={{color:"#ab47bc"}}> handsome</Text> photo of  
                  
                    </Text>
             
                    
                        <Text style={{color:"#ab47bc"}}> yourself <Text style={{color:"black"}}>or you will banned from uploading. </Text>
                        
                        </Text> 
                  
                   
                </View>
            </View>
           
        </View>
    )
}

export default UploadPoster

const styles = StyleSheet.create({})
