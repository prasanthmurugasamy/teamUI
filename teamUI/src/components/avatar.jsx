import React from 'react'
import { Text , StyleSheet ,View } from 'react-native'

export const Avatar = (props) =>{
const { text } = props
const nameSplitter = (text)=>{
    return text ?  text.split(" ")[1] : "T"
}
    return (
        <View style={styles.conatiner}>
        <View style={styles.circle}  >
        <Text style={{fontSize:20,fontWeight:'900'}}>{nameSplitter(text)}</Text>
        </View>
        <Text style={styles.teamName}>{text}</Text>
        </View>
    )
}

const styles =StyleSheet.create({
    circle:{
        borderRadius:120,
        height:120,
        width:120,
        backgroundColor:'#d6d7d6',
        alignItems:'center',
        justifyContent:'center'
    },
    conatiner:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },
    teamName:{
        fontSize:14,
        fontWeight:'bold',
        marginTop:10
    }
})