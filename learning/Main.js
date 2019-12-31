import React, { useState, useEffect, useMemo } from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import ChildComponent from '../ChildComponent';

export default function Main(props){

    const [index,setIndex] = useState(0);

   

    const count = useSelector(state => state.counter);

    const dispatch = useDispatch();

    const onIncre = () => {
        dispatch( {type:'increase' } );
        setIndex(index +1 );
    };

    const onDecre = () => {
        dispatch( {type:'decrease'} );
    };

    useEffect( () => {
        // fetch data
    })

    return (
    <View style={styleTemp}>
        <ChildComponent/>
        <View>
            <Text>count: {count}</Text>
            <Text>index: {index}</Text>
        </View>
        <TouchableOpacity onPress={onIncre}>
            
            <View style={[styles.container,styles.bgGreen]}>
                <Text style={styles.text}>increase</Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onDecre}>
            <View style={[styles.container, styles.bgRed]}>
                <Text style={styles.text}>deacrease</Text>
            </View>
        </TouchableOpacity>
    </View>
    );
   
} 




const styles = StyleSheet.create(
    {   
        app:{
            marginTop:temp
        },
        container:{
            flexDirection:'row',
            justifyContent:'center',
            paddingVertical:temp,
            backgroundColor:'green'
        },
        bgGreen:{
            backgroundColor:'green',
        },
        bgRed:{
            backgroundColor:'red',
        },
        text:{
            fontSize:32,
            color:'white',
        }
    }
)