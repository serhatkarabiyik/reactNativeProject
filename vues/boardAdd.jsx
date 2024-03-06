import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { UserContext } from "../context/userContext";
import { ajoutBoard } from "../api/board";
import { Input } from "@rneui/themed";

const BoardAjout = () => {
  const [nom, setNom] = useState("");
  const { user } = useContext(UserContext);
  const handleAjout = () => {
    try {
      ajoutBoard(user.uid, nom);
      Alert.alert("project ajouté");
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <>
      <View>
        <StatusBarBackground />
      </View>
      <View style={globalStyles.containerForm}>
        <Input
          placeholder="Nom du projet"
          style={globalStyles.input}
          value={nom}
          onChangeText={setNom}
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
          onPress={handleAjout}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default BoardAjout;
