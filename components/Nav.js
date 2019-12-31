import React from 'react';
import { Image, SafeAreaView, StyleSheet, View , Text, TouchableWithoutFeedback} from 'react-native';
export default function Nav(props){

    return(
        <View style={styles.container}>
            <View style={styles.iconWrap}>
               
                    <Image source={require('../assets/images/icon/movieIcon.png')} 
                    style={[styles.icon,styles.iconLogo]} resizeMode='contain'/>
                    <Text style={styles.appName}>Movie Universe</Text>
                    <Image source={require('../assets/images/icon/searchIcon.png')} style={styles.icon} ></Image>
                    <Image source={require('../assets/images/icon/notificationIcon.png')} style={styles.icon}></Image>
                    <Image source={require('../assets/images/icon/starIcon.png')} style={styles.icon}></Image>
            </View>
          
          <Text style={styles.header}>Trang Chủ</Text>
       </View>
    )
}

const styles = StyleSheet.create(
    {
      container:{
          margin:10,
          marginVertical:14,
      },
      iconWrap:{
          flexDirection:'row',
          alignItems:'center'
      },
      icon:{
        marginRight:14,
        height:24,
        width:24
      },
      iconLogo:{
        marginRight:0
        
      },
      appName:{
        color:'white',
        fontSize:16,
        marginRight:30,

      },
      header:{
          color:'white',
          fontSize:24,
          fontWeight:'600',
          marginTop:7
      }
    }
  )