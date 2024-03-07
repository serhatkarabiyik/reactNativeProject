import React, { useContext, useState, useEffect } from "react";

// API
import { UserContext } from "../context/userContext";
import { createColumn, getColumn, updateColumn } from "../api/column";

// component
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import Toast from "react-native-toast-message";
import StatusBarBackground from "../components/statusBarBg";

// Utils
import { globalStyles } from "../styles/globalStyles";
import { toastConfig } from "../utils";

const ColumnAdd = ({ navigation, route }) => {
  const { board } = useContext(UserContext);
  const [title, setTitle] = useState();
  const [column, setColumn] = useState();
  console.log(route);
  let columnId = false;
  if (route) {
    columnId = route?.params?.columnId;
  }

  const loadColumn = async () => {
    if (columnId) {
      try {
        const column = await getColumn(board, columnId);
        setTitle(column.columnTitle);
        setColumn(column);
      } catch (error) {
        console.error("Error loading column:", error);
      }
    }
  };

  if (!column && columnId) {
    loadColumn();
  }

  const handleAddColumn = async () => {
    try {
      if (column) {
        await updateColumn(board, columnId, title);
        Toast.show({
          type: "success",
          text1: "Succès",
          text2: "Colonne modifiée avec succès !",
          text2Style: {
            fontSize: 14,
          },
          topOffset: 0,
        });
        navigation.navigate("columnAdd", {});
        setColumn();
      } else {
        await createColumn(board, title);
        Toast.show({
          type: "success",
          text1: "Succès",
          text2: "Colonne ajoutée avec succès !",
          text2Style: {
            fontSize: 14,
          },
          topOffset: 0,
        });
      }
      setTitle("");
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erreur",
        topOffset: 0,
      });
    }
  };

  return (
    <>
      <View>
        <StatusBarBackground />
      </View>
      <View style={globalStyles.containerForm}>
        <Toast config={toastConfig} />
        <Text style={globalStyles.title}>
          {columnId ? "Modifier la colonne" : "Ajouter une colonne"}
        </Text>
        <Input
          placeholder="Entrez le titre"
          style={globalStyles.input}
          value={title}
          onChangeText={setTitle}
          leftIcon={<Icon name="title" size={20} />}
        />

        <Button
          title={column ? "Modifier" : "Ajouter"}
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
          onPress={handleAddColumn}
        />
      </View>
    </>
  );
};

export default ColumnAdd;

const styles = StyleSheet.create({});
