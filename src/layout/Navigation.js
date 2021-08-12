import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import{createStackNavigator} from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomePage from './HomePage';
import ChatPrice from "./ChatPrice"
import AboutPage from "./About"
import EditProfilePage from "./EditProfile"
import UploadPage from "./UploadPoster"
const RootStack =createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Navigation = ({navigation}) => {
    return (
        <Tab.Navigator
        initialRouteName="HomePage"
        activeColor="#fff"
        barStyle={{ backgroundColor: '#ec407a' }}
      >
           <Tab.Screen
        name="Feed"
      
    
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      >
          {()=>(
          <RootStack.Navigator   >
              <RootStack.Screen component={HomePage} name="HomePage"  options={{headerShown: false }}/>
             
              <RootStack.Screen component={ChatPrice} name="chatPrice"options={{
              title: "My Chat Price",
              headerStyle:{
                backgroundColor:"#fff"
              },
              headerTintColor:"black"
              
            }} />
             <RootStack.Screen component={AboutPage} name="AboutPage"options={{
              title: "About us",
              headerStyle:{
                backgroundColor:"#fff"
              },
              headerTintColor:"black"
              
            }} />
              <RootStack.Screen component={EditProfilePage} name="EditProfilePage"options={{
              title: "Edit Profile",
              headerStyle:{
                backgroundColor:"#fff"
              },
              headerTintColor:"black"
              
            }} />
                <RootStack.Screen component={UploadPage} name="UploadPage"options={{
            title: "Upload Poster",
              headerStyle:{
                backgroundColor:"#fff"
              },
              headerTintColor:"black"
              
            }} />
            
            
            
    

              
             

              
         </RootStack.Navigator>
         )}
    </Tab.Screen>


          </Tab.Navigator>
    )
}

export default Navigation

const styles = StyleSheet.create({})
