import React, { useState, useContext } from "react";
import { StyleSheet, Modal, View } from "react-native";
import { ListItem, Button, Dialog, Text } from "@rneui/themed";
import { deleteColumn } from "../api/column";
import { UserContext } from "../context/userContext";
import Toast from "react-native-toast-message";
import { toastConfig } from "../utils";

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

  const handleColumn = async (id, action) => {
    console.log(id, action);

    if (id && action) {
      if (action === "edit") {
        navigation.navigate("columnAdd", { columnId: id });
      } else if (action === "delete") {
        setVisible(true);
        setColumnId(id);
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
        topOffset: 50,
      });
      setVisible(false);
      setColumnId();
    } catch (error) {
      console.error("Error loading column:", error);
      Toast.show({
        type: "error",
        text1: "Erreur",
        topOffset: 50,
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
        {data?.tasks?.map((task) => (
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
                onPress={action}
              />
            )}
          >
            <ListItem style={styles.item}>
              <ListItem.Content>
                <ListItem.Title>{task.title}</ListItem.Title>
              </ListItem.Content>
            </ListItem>
          </ListItem.Swipeable>
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

      <Dialog isVisible={visible} onBackdropPress={() => setVisible(false)}>
        <Dialog.Title title="Voulez vous vraiment supprimé ? " />
        <Text>
          Cette action est irréversible et toutes les données associées seront
          perdues.
        </Text>
        <Dialog.Actions>
          <Dialog.Button title="Supprimer" onPress={() => columnDelete()} />
          <Dialog.Button title="Annuler" onPress={() => setVisible(false)} />
        </Dialog.Actions>
      </Dialog>
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accordionButton: {
    width: "20px",
  },
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

export default ColumnCard;
