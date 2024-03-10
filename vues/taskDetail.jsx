import { View, Text } from "react-native";
import React from "react";

export default function TaskDetail(props) {
  const { task } = props;

  return (
    <View>
      <Text>Titre : {task.taskTitle}</Text>
      <Text>Description : {task.description}</Text>
    </View>
  );
}
