import React, { Component } from 'react'
import { FlatList, Text, Touchable, TouchableOpacity, View ,StyleSheet } from 'react-native'
import { Card } from '../components/card'
import { VsCard } from '../components/vsCard'
import { Platform, StatusBar } from 'react-native';


export const team_list_data = [
    {
        id:1,
        teamOne:"Team A",
        teamTwo:"Team B"
    },
    {
        id:2,
        teamOne:"Team C",
        teamTwo:"Team D"
    },
    {
        id:3,
        teamOne:"Team E",
        teamTwo:"Team F"
    },
    {
        id:4,
        teamOne:"Team G",
        teamTwo:"Team H"
    },
    {
        id:5,
        teamOne:"Team I",
        teamTwo:"Team J"
    }
]

export const ListScreen = ({route , navigation}) => {


    const teamMapper = (item) =>{
        return {
            id:item.id,
            teamOne:item.teamOne,
            teamTwo:item.teamTwo
        }
    }
    const navigateToSelectPlayer = (id) =>{
        navigation.navigate('selectPlayer',{
            id:id
        })
    }
    
    const renderItem = ({ item }) =>{
            const { teamOne , teamTwo , id} = teamMapper(item)
            return(
                <TouchableOpacity onPress={()=>navigateToSelectPlayer(id)}>
                <Card>
                    <VsCard teamOne={teamOne} teamTwo={teamTwo} />
                </Card>
                </TouchableOpacity>

            )
    }


    return (

        <FlatList
        contentContainerStyle={{padding:10}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={team_list_data}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id}
        />

    )
  }
