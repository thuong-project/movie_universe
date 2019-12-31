import React, { useState, useEffect } from 'react'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

export default function childComponent(props){

    useEffect(() => {
        //alert("childComponent re render");
    })
    return(
        <Text>childComponent</Text>
    )
}