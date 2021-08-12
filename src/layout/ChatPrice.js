import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {Card} from "react-native-paper"
import Icons from "react-native-vector-icons/Feather"
const ChatPrice = () => {
    return (
        <View style={{flex: 1,backgroundColor:"#fff"}}>

            <View style={{alignItems: 'center',marginTop:10}}>
                <Image 
                style={{height:100,width:100}}
                source={require('../../assets/p1.png')}/>
                <View style={{flexDirection:"row"}}>
                
                <Text style={{fontWeight:"bold",fontSize:16,marginTop:10,color:"#350f63"}}>Present Price: 2,000 /min</Text>
                <Icons name="edit" size={16} style={{paddingTop:13,marginLeft:10}} color="#ab47bc"/>
            </View>
            </View>
            <View style={{marginTop:10,marginHorizontal:15}}>
          <Card style={{backgroundColor:"#f5f5f5",borderRadius:10}}>
          <Text style={{fontWeight:"bold",fontSize:16,marginTop:10,
          marginLeft:5,
          color:"#350f63"}}>Price Adjustment Rule</Text>
          <Text style={{fontSize:13,color:"#757575",marginLeft:8,marginTop:10}}>1. You can set any price in the range of 2000 to
                 8000 diamonds/min for the first time
          </Text>
          <Text style={{fontSize:13,color:"#757575",marginLeft:8,marginTop:10}}>2. The price shall be increased by 1000
               diamonds every 7 days,but hosts can decrease
               it at any time.
          </Text>
          <Text style={{fontSize:13,color:"#757575",marginLeft:8,marginTop:10}}>3. There is a fixed earning amount,which is 1200
                        beans/min for free Calls(the callers in a trail) 
                        because Free Calls don't apply to Price
                       Adjustment. 
        
          </Text>

          </Card>
            </View>
        </View>
    )
}

export default ChatPrice

const styles = StyleSheet.create({})
