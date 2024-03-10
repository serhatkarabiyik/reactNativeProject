import React, { useState, useContext } from "react";
import { StyleSheet, Modal, View } from "react-native";
import { ListItem, Button, Text } from "@rneui/themed";
import DialogComponent from "./dialog";
import { deleteColumn } from "../api/column";
import { UserContext } from "../context/userContext";
import Toast from "react-native-toast-message";
import TaskCard from "./taskCard";

const ColumnCard = (props) => {
  const { data, navigation } = props;
  const [isModalVisible, setModalVisible] = useState(false);
  const [expanded, setExpanded] = useState(true);
  const [visible, setVisible] = useState(false);
  const [columnId, setColumnId] = useState();
  const { board } = useContext(UserContext);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleColumn = (id, action) => {
    if (id && action) {
      if (action === "edit") {
        navigation.navigate("columnAdd", { columnId: id });
      } else if (action === "delete") {
        setVisible(true);
        setColumnId(id);
      } else if (action === "add") {
        navigation.navigate("taskAdd", { columnId: id });
      }
    }
    closeModal();
  };

  const columnDelete = async () => {
    try {
      await deleteColumn(board, columnId);
      Toast.show({
        type: "success",
        text1: "Succès",
        text2: "Colonne supprimer avec succès !",
        text2Style: {
          fontSize: 14,
        },
      });
      setVisible(false);
      setColumnId();
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
      <ListItem.Accordion
        content={
          <ListItem.Content style={styles.accordionTitle}>
            <ListItem.Title>{data.columnTitle}</ListItem.Title>
            <Button
              style={styles.accordionButton}
              containerStyle={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "transparent",
                flex: "unset",
              }}
              type="clear"
              icon={{
                name: "dots-horizontal",
                type: "material-community",
              }}
              onPress={() => openModal()}
            />
          </ListItem.Content>
        }
        style={styles.accordion}
        containerStyle={styles.accordionContainer}
        isExpanded={expanded}
        onPress={() => {
          setExpanded(!expanded);
        }}
      >
      {data?.tasks?.map((task, key) => (
        <TaskCard
          task={task}
          columnId={data.columnId}
          key={key}
          navigation={navigation}
        />
      ))}
      </ListItem.Accordion>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={closeModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button
              style={styles.accordionButton}
              containerStyle={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "transparent",
                flex: "unset",
              }}
              type="clear"
              icon={{
                name: "card-plus",
                type: "material-community",
              }}
              onPress={() => handleColumn(data.columnId, "add")}
            />
            <Button
              style={styles.accordionButton}
              containerStyle={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "transparent",
                flex: "unset",
              }}
              type="clear"
              icon={{
                name: "pencil",
                type: "material-community",
              }}
              onPress={() => handleColumn(data.columnId, "edit")}
            />
            <Button
              style={styles.accordionButton}
              containerStyle={{
                flex: 1,
                justifyContent: "center",
                backgroundColor: "transparent",
                flex: "unset",
              }}
              type="clear"
              icon={{
                name: "delete",
                type: "material-community",
              }}
              onPress={() => handleColumn(data.columnId, "delete")}
            />
          </View>
        </View>
      </Modal>

      <DialogComponent
        visible={visible}
        onBackdropPress={() => setVisible(false)}
        deleteAction={() => columnDelete()}
        cancelAction={() => setVisible(false)}
      />
    </>
  );
};

// Styles pour le composant Home
const styles = StyleSheet.create({
  accordion: {
    width: "100%",
    marginTop: 20,
  },
  accordionContainer: {
    width: "100%",
  },
  accordionTitle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accordionButton: {
    width: "20px",
  },
});

export default ColumnCard;
