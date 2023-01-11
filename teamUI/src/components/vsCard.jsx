import React from 'react'
import { View , StyleSheet, Text, TouchableOpacity} from 'react-native'
import { Avatar } from './avatar'

export const VsCard = (props) => {
const { teamOne , teamTwo } = props
  return (
    <View>
      <View style={styles.innerCard}>
      <Avatar text ={teamOne}/>
      <Text style={styles.textVs}>Vs</Text>
      <Avatar text ={teamTwo}/>
    </View>
    <Text style={{textAlign:'center',padding:8,color:'grey'}}>Kindly Select players for your fantasy team</Text>
    </View>
  )
}

const styles = StyleSheet.create({
        innerCard:{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-evenly',
            height:200,
            width:"95%"
        },

        textVs:{
            fontSize:18,
            fontWeight:'bold',
            alignSelf:'center',
            justifyContent:'center',
            alignItems:'center',
        }
})