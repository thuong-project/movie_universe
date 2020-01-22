
import React from 'react';
import { Dimensions, Image, StyleSheet,ScrollView, View, Text } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const WINDOW_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create(
  {   
      container:{
         
         marginTop:14,
      },
      
      img:{
        margin:3,
        borderRadius:7,
        width:WINDOW_WIDTH/2 - 6,
        height:WINDOW_HEIGHT/5,
        
    },
    defaultName:{
        color:'white',
        fontSize:13,
        marginLeft:3,
    },
    anotherName:{
        marginLeft:3,
        color:'gray',
        fontSize:12,
    },
    itemWrap:{
        width:WINDOW_WIDTH/2,
        marginBottom:5
    },
    textWrap:{
        flexDirection:'row',
        alignItems:'baseline',
        marginBottom:3
    },
    header:{
        color:'white',
        fontSize:16,
        marginLeft:7,
        fontWeight:'500',
        flexGrow:1
        
  },
    seeMore:{
        
        color:'white',
        fontSize:12,

    },
    seeMoreIcon:{
        marginRight:7,
        marginLeft:3,
        width:10,
        height:10,
    }
  }
)



export default function CustomScrollView(props){
    
    renderItem = (item,index) => 
    <View style={styles.itemWrap} key={index}>
        <Image source={item} style={styles.img} ></Image>
        <Text style={styles.defaultName} ellipsizeMode='tail' numberOfLines={1} >Yummi Montageeeeeeeeeeeeeeeeeeeeee</Text>
        <Text style={styles.anotherName} ellipsizeMode='tail' numberOfLines={1} >Ymumi Montage</Text>
    </View>
    return (
        <View style={styles.container}>
                <View style={styles.textWrap}>
                    <Text style={styles.header}>Phim lẻ mới</Text>
                    <Text style={styles.seeMore}>Xem thêm</Text>
                    <Image source={require('../assets/images/icon/seeMoreIcon.png')} style={styles.seeMoreIcon}></Image>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                { props.data.map((item,index) => renderItem(item,index)) }
               </ScrollView>
       </View>
    )

}

