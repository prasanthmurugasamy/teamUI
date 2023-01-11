import React from "react";
import { StyleSheet , View ,Text } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const PlayerSelectedCountBadge = () =>{
    let arrList = useSelector(state => state.playerIdArray)
    const arrLength = arrList.length
    const viewArr = [1,2,3,4,5,6,7,8,9,10,11]
    return (
        <>
        <View style={{flexDirection:'row',padding:10}}>
            {
                viewArr.map((i,index)=>
                    <View style={[styles.circle,{backgroundColor:i <=arrLength ? 'green':'grey',borderColor: i <=arrLength ? 'green' : 'grey'}]} key={index}>
                      { i <=arrLength && <Text>{i}</Text>}
            </View>
                )
            }
        </View>
        </>
    )
}

const styles = StyleSheet.create({
        circle:{
            width:35,
            height:35,
            borderRadius:40,
            alignItems:'center',
            justifyContent:'center',
            margin:2,
            borderWidth:3,
        }
})

export default PlayerSelectedCountBadge