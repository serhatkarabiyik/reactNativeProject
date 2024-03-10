import { StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { ListItem, Button, Text } from "@rneui/themed";
import DialogComponent from "./dialog";
import { deleteTask } from "../api/task";
import { UserContext } from "../context/userContext";

import Toast from "react-native-toast-message";
import { Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TaskCard = (props) => {
  const { task, columnId, navigation } = props;

  const [visible, setVisible] = useState(false);
  const [taskId, setTaskId] = useState();

  const { board } = useContext(UserContext);

  const handleTask = (id, action) => {
    if (action) {
      if (action === "edit") {
      } else if (action === "delete") {
        setVisible(true);
        setTaskId(id);
      }
    }
  };

  const taskDelete = async () => {
    try {
      await deleteTask(board, columnId, taskId);
      Toast.show({
        type: "success",
        text1: "Succès",
        text2: "Tâche supprimer avec succès !",
        text2Style: {
          fontSize: 14,
        },
      });
      setVisible(false);
      setTaskId();
    } catch (error) {
      console.error("Error loading column:", error);
      Toast.show({
        type: "error",
        text1: "Erreur",
      });
    }
  };
  return (
    <>
      <ListItem.Swipeable
        leftWidth={80}
        rightWidth={90}
        minSlideWidth={40}
        style={styles.swipeable}
        containerStyle={styles.swipeableContainer}
        leftContent={(action) => (
          <Button
            containerStyle={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: "#f4f4f4",
            }}
            type="clear"
            icon={{
              name: "archive-outline",
              type: "material-community",
            }}
            onPress={action}
          />
        )}
        rightContent={(action) => (
          <Button
            containerStyle={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: "#f4f4f4",
            }}
            type="clear"
            icon={{ name: "delete-outline" }}
            onPress={() => handleTask(task.taskId, "delete")}
          />
        )}
        onPress={() => navigation.navigate("Détail", { task: task })}
      >
        <ListItem style={styles.item}>
          <ListItem.Content>
            <TouchableOpacity onPress={() => navigation.navigate("TaskDetail")}>
              <ListItem.Title>{task.taskTitle}</ListItem.Title>
            </TouchableOpacity>
          </ListItem.Content>
        </ListItem>
      </ListItem.Swipeable>
      <DialogComponent
        visible={visible}
        onBackdropPress={() => setVisible(false)}
        deleteAction={() => taskDelete()}
        cancelAction={() => setVisible(false)}
      />
    </>
  );
};

const styles = StyleSheet.create({
  swipeable: {
    display: "flex",
    flexDirection: "column",
  },
  swipeableContainer: {
    flexDirection: "column",
  },
  item: {
    width: "100%",
    minWidth: "400px",
  },
});

export default TaskCard;
