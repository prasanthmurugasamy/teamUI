import React, { Component , useState } from 'react'
import { Text, View } from 'react-native'
import { Tab, TabView } from '@rneui/themed';
import PlayerList from './playerList';


const data_wk =[
    {
        id:1,
        playerId:1,
        name:"Player 1"
    },
    {
        id:2,
        playerId:2,
        name:"Player 2"
    },
    {
        id:3,
        playerId:3,
        name:"Player 3"
    },
    {
        id:4,
        playerId:4,
        name:"Player 4"
    },
    {
      id:5,
      playerId:5,
      name:"Player 5"
  },
  {
    id:6,
    playerId:6,
    name:"Player 6"
}

]

const data_bat =[
    {
        id:1,
        playerId:7,
        name:"Player 7"
    },
    {
        id:2,
        playerId:8,
        name:"Player 8"
    },
    {
        id:3,
        playerId:9,
        name:"Player 9"
    },
    {
        id:4,
        playerId:10,
        name:"Player 10"
    }

]

const data_ar =[
    {
        id:1,
        playerId:11,
        name:"Player 11"
    },
    {
        id:2,
        playerId:12,
        name:"Player 12"
    },
    {
        id:3,
        playerId:13,
        name:"Player 13"
    },
    {
        id:4,
        playerId:14,
        name:"Player 14"
    }

]
const data_bowl =[
    {
        id:1,
        playerId:15,
        name:"Player 15"
    },
    {
        id:2,
        playerId:16,
        name:"Player 16"
    },
    {
        id:3,
        playerId:17,
        name:"Player 17"
    },
    {
        id:4,
        playerId:18,
        name:"Player 18"
    },
    {
      id:5,
      playerId:19,
      name:"Player 19"
  },
  {
    id:6,
    playerId:20,
    name:"Player 20"
},
{
  id:7,
  playerId:21,
  name:"Player 21"
},
{
  id:8,
  playerId:22,
  name:"Player 22"
}

]

const Tabs = () => {
    const [index, setIndex] = useState(0);
    return (
      <>
      <Tab
      value={index}
      onChange={(e) => setIndex(e)}
      indicatorStyle={{
        backgroundColor: 'grey',
        height: 2,
      }}
      variant="default"
    >
      <Tab.Item
        title="WK"
        titleStyle={{ fontSize: 12 }}
      />
      <Tab.Item
        title="BAT"
        titleStyle={{ fontSize: 12 }}
      />
      <Tab.Item
        title="AR"
        titleStyle={{ fontSize: 12 }}
      />
          <Tab.Item
        title="BOWL"
        titleStyle={{ fontSize: 12 }}
      />
    </Tab>

    <TabView value={index} onChange={setIndex} animationType="timing" disableSwipe>
      <TabView.Item style={{flex:1}} >
        <PlayerList data={data_wk} />
      </TabView.Item>
      <TabView.Item style={{flex:1}} >
        <PlayerList data ={data_bat}/>
      </TabView.Item>
      <TabView.Item style={{flex:1}} >
        <PlayerList data={data_ar} />
      </TabView.Item>
      <TabView.Item style={{flex:1}} >
        <PlayerList data={data_bowl}/>
      </TabView.Item>
    </TabView>
      </>
    )
}

export default Tabs