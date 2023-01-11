import React, {  } from 'react'
import { Text, View , TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native'
import Tabs from '../components/tabs';
import { VsCard } from '../components/vsCard';
import { useSelector , useDispatch } from 'react-redux';
import PlayerSelectedCountBadge from '../components/playerSelectedCountBadge';
import { team_list_data } from './listScreen';
import { writeFileToStorage } from '../utils/writeFileToStorage';
import { stat } from 'react-native-fs';
import { Icon } from '@rneui/base';

export const SelectPlayerScreen = ({navigation , route}) => {
  const id = route.params.id
const team_data = team_list_data.filter((e)=> e.id === id)
  const playerIdArray = useSelector(state => state.playerIdArray)
  const dispatch = useDispatch();
  const onPressSave = async () =>{
    const dataObj = {
      id:id,
      selectedPlayerList:playerIdArray
    }
    const path = `${id}_${Math.random}`
      const status =  writeFileToStorage(path,dataObj)
      ToastAndroid.show(status ? "File Written Successfully to documents folder" : "error in writing file / file may exists already",ToastAndroid.SHORT)
  }
  const onBackPress = () =>{
    navigation.goBack()
    dispatch({ type: "CLEAR", payload: [] })
  }

    return (
      <View style={{flex:1,margin:10}}>

      <Icon name='arrow-back-ios' size={30} style={{alignSelf:'flex-start',marginLeft:5}} onPress={onBackPress}/>
        <VsCard teamOne={team_data[0].teamOne} teamTwo={team_data[0].teamTwo}/>
        <PlayerSelectedCountBadge/>
         <Tabs/>
         <TouchableOpacity disabled ={ playerIdArray.length < 11} style={[styles.saveBtn,{  backgroundColor: playerIdArray.length <11 ? 'grey' : 'green'}]} onPress={onPressSave} >
            <Text style={{color:'white',fontSize:18}}>SAVE DATA</Text>
        </TouchableOpacity>
      </View>
    )
  }

  const styles = StyleSheet.create({
    saveBtn:{
      alignSelf:'center',
      height:50,
      width:"50%",
      justifyContent:'center',
      alignItems:'center',
      bottom:10,
      borderRadius:5,
      borderWidth:2,
      borderColor:'gren',
    }
  })