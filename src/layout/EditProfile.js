import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View,Image,Modal,Alert } from 'react-native'
import {Card} from "react-native-paper"
import Icon from "react-native-vector-icons/Ionicons"
const EditProfile = ({navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{flex:1,}}>
        <View style={{backgroundColor:"#fff",alignItems:"center",marginTop:10,height:150}}>
            <TouchableOpacity onPress={() =>navigation.navigate("UploadPage")}>
            <Card style={{width:100,height:100,marginTop:10,borderRadius:56}}>
                <Image source={require("../../assets/p9.jpg")}
                style={{width:"100%",height:"100%",borderRadius:56}}
                />
            </Card>
            </TouchableOpacity>
            <View style={{marginLeft:80}}>
            <Card style={{backgroundColor:"yellow" ,height:22,width:22,marginTop:-29,borderRadius:50}}>
             <Icon name="camera-outline" size={17} style={{marginLeft:3,marginTop:2}}/>
            </Card>
            </View>
            

        </View>
 
        <View style={{backgroundColor:"#fff",marginTop:10}}>
                <View style={{flexDirection:"row", justifyContent:"space-between",borderBottomWidth:1,borderBottomColor:"#e0e0e0"}}>
                    <Text style={{fontWeight:"bold",fontSize:16,color:"bdbdbd",marginLeft:5,marginTop:5}}>UserName</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{marginTop:10,marginRight:5,color:"#9e9e9e",fontWeight:"bold",fontWeight:"500"}}>Tony Stark</Text>
                        <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
                    </View>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:10,borderBottomWidth:1,borderBottomColor:"#e0e0e0"}}>
                    <Text style={{fontWeight:"bold",fontSize:16,color:"bdbdbd",marginLeft:5,marginTop:5}}>Gender</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{marginTop:10,marginRight:5,color:"#9e9e9e",fontWeight:"bold",fontWeight:"500"}}>Male</Text>
                        <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
                    </View>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",
                marginTop:10,borderBottomWidth:1,borderBottomColor:"#e0e0e0"}}>
                    <Text style={{fontWeight:"bold",fontSize:16,color:"bdbdbd",marginLeft:5,marginTop:5}}>Date of Birth</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{marginTop:10,marginRight:5,color:"#9e9e9e",fontWeight:"bold",fontWeight:"500"}}>25-02-1998</Text>
                        <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
                    </View>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:10}}>
                    <Text style={{fontWeight:"bold",fontSize:16,color:"bdbdbd",marginLeft:5,marginTop:5}}>Bio</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{marginTop:10,marginRight:5,color:"#9e9e9e",fontWeight:"bold",fontWeight:"500"}}>Tony Stark</Text>
                        <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
                    </View>
                </View>
            </View>
            <View style={{alignItems:"center",justifyContent:"center"}}>
            <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bio</Text>
            <Text style={{color:"#9e9e9e"}}>Up to 50 characters (5/50)</Text>
            <View style={{marginTop:5}}>
                  <Card style={{backgroundColor:"#bdbdbd",height:150,borderWidth:1,width:250}}>

                    <Text>Hello..</Text>
                  </Card>
              </View>
              <View style={{marginTop:5,flexDirection:"row", justifyContent:"space-between"}}>
            <TouchableOpacity
              style={{width:80,height:30,backgroundColor:"#fff",marginRight:20,marginTop:5,borderRadius:15,borderWidth:1}}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{color:"black",textAlign:"center",paddingTop:5}}>Cancel</Text>
             
            </TouchableOpacity>
            <TouchableOpacity
              style={{width:80,height:30,backgroundColor:"#fbc02d",marginLeft:5,marginTop:5,borderRadius:15}}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{color:"black",textAlign:"center",paddingTop:5}}>Confirm</Text>
             
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      </View>
            <View style={{backgroundColor:"#fff",marginTop:5}}>
                <TouchableOpacity    onPress={() => setModalVisible(true)}>

            <View style={{flexDirection:"row", justifyContent:"space-between",marginTop:10}}>
                <View style={{flexDirection:"row",marginLeft:5}}>
                <Card style={{backgroundColor:"#fbc02d" ,height:25,width:25,borderRadius:50,marginTop:3}}>
             <Icon name="pricetag" size={17} style={{marginLeft:3,marginTop:2}} color="black"/>
            </Card>
                    <Text style={{fontWeight:"bold",fontSize:16,color:"bdbdbd",marginLeft:5,marginTop:5}}>Tag</Text>
             
                    </View>
                    <View style={{}}>
                      
                        <Icon name="chevron-forward-outline"
                color="#bdbdbd"
                style={{paddingTop:10}}
                size={20}/>
                    </View>
                </View>
                </TouchableOpacity>
                </View>
        </View>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})
