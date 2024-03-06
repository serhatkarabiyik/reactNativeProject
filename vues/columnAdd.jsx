import React, { useContext, useState, useEffect } from "react";

// API
import { UserContext } from "../context/userContext";
import { createColumn } from "../api/column";

// component
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import Toast from "react-native-toast-message";
import StatusBarBackground from "../components/statusBarBg";

// Utils
import { globalStyles } from "../styles/globalStyles";
import { toastConfig } from "../utils";

const ColumnAdd = () => {
  const { board } = useContext(UserContext);
  const [title, setTitle] = useState("");

  const handleAddColumn = () => {
    try {
      const column = createColumn(board, title);
      Toast.show({
        type: "success",
        text1: "Succès",
        text2: "Colonne ajouté avec succès !",
        text2Style: {
          fontSize: 14,
        },
        topOffset: 0,
      });
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
        <Text style={globalStyles.title}>Ajouter une colonne</Text>
        <Input
          placeholder="Entrez le titre"
          style={globalStyles.input}
          value={title}
          onChangeText={setTitle}
          leftIcon={<Icon name="title" size={20} />}
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
          onPress={handleAddColumn}
        />
      </View>
    </>
  );
};

export default ColumnAdd;

const styles = StyleSheet.create({});
