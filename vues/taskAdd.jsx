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
import { getAllTaskOfColumn, createTask } from "../api/task";

const TaskAdd = ({ route }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user, board } = useContext(UserContext);

  let columnId = false;
  let taskId = false;
  if (route) {
    columnId = route?.params?.columnId;
  }

  const handleAddTask = async () => {
    try {
      if (taskId) {
        await updateTask(board, columnId, title, description);
        Toast.show({
          type: "success",
          text1: "Succès",
          text2: "Tâche modifiée avec succès !",
          text2Style: {
            fontSize: 14,
          },
        });
      } else {
        await createTask(board, columnId, title, description);
        Toast.show({
          type: "success",
          text1: "Succès",
          text2: "Tâche ajoutée avec succès !",
          text2Style: {
            fontSize: 14,
          },
        });
      }
      setTitle("");
      setDescription("");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erreur",
      });
    }
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
            backgroundColor: "#007FFF",
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
