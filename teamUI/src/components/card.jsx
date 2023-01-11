import { StyleSheet, View } from 'react-native'

import React from 'react'

export const Card = (props) => {
    const { children } = props
  return (
    <View
    style={styles.card}
    >{children}</View>
  )
}


const styles = StyleSheet.create({
    card:{
        height:250,
        width:"100%",
        padding:2,
        justifyContent:'center',
        backgroundColor:'white',
        marginBottom:15,
        marginTop:5,
        shadowColor: "#000",
        borderColor:'#eaeaeb',
        borderWidth:2,
        shadowOffset: {
        width: 0,
        height: 12,
        },
        shadowOpacity: 1,
        shadowRadius: 5,
                elevation: 4,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 15,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 15,
    }
})
