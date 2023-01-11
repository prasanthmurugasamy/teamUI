import { Icon } from "@rneui/base";
import React, { useState } from "react";
import { render } from "react-dom";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";

const PlayerList = (props) => {
  const { data } = props;
  const dispatch = useDispatch();
  let arrList = useSelector((state) => state.playerIdArray);

  const onPressIcon = (id) =>{
    dispatch({ type: "INSERT_ID", payload: id })
  }
  const renderItem = ({ item }) => {
    const playerIdIncludes = arrList.includes(item.playerId);
    return (
      <View style={styles.holder}>
        <Text style={styles.playerText}>{item.name}</Text>
        {playerIdIncludes ? (
          <Icon
            name={"remove-circle-outline"}
            size={35}
            disabledStyle={styles.disabledStyle}
            color={"red"}
            onPress={() =>onPressIcon(item.playerId)}
          />
        ) : (
          <Icon
            disabled={arrList.length >= 11}
            disabledStyle={styles.disabledStyle}
            name={"add-circle-outline"}
            size={35}
            color={"green"}
            onPress={() =>onPressIcon(item.playerId)}
          />
        )}
      </View>
    );
  };
  return (
    <>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item)=> item.playerId.toString() }/>
    </>
  );
};

const styles = StyleSheet.create({
  holder: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  playerText: {
    fontSize: 18,
  },
  disabledStyle:{
    borderRadius:35
  }
});

export default PlayerList;
