import React, { useContext, useState, useEffect } from "react";

// API
import { UserContext } from "../context/userContext";

// component
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import Toast from "react-native-toast-message";

// Utils
import { globalStyles } from "../styles/globalStyles";
import StatusBarBackground from "../components/statusBarBg";
import { getAllTaskOfColumn } from "../api/task";

const TaskAdd = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    loadBoards();
  }, []);

  const handleAddTask = async () => {
    try {
    } catch (error) {}
  };

  const loadBoards = async () => {
    try {
      const c = await getAllTaskOfColumn(user.uid);
    } catch (error) {}
  };

  return (
    <>
      <View>
        <StatusBarBackground />
      </View>
      <View style={globalStyles.containerForm}>
        <Text style={globalStyles.title}>Ajouter une tâche</Text>
        <Input
          placeholder="Entrez le titre"
          style={globalStyles.input}
          value={title}
          onChangeText={setTitle}
          leftIcon={<Icon name="title" size={20} />}
        />
        <Input
          placeholder="Entrez votre description"
          style={globalStyles.input}
          value={description}
          onChangeText={setDescription}
          leftIcon={<Icon name="description" size={20} />}
        />

        <Button
          title="Ajouter"
          buttonStyle={{
            backgroundColor: "blue",
            borderWidth: 1,
            borderColor: "white",
            borderRadius: 30,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          titleStyle={{ fontWeight: "bold" }}
          onPress={handleAddTask}
        />
      </View>
    </>
  );
};

export default TaskAdd;

const styles = StyleSheet.create({});
