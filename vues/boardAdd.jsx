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
      console.log(user);
      ajoutBoard(user.uid, nom);
      Alert.alert("project ajouté");
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={globalStyles.containerForm}>
      <Input
        placeholder="Nom du projet"
        style={globalStyles.input}
        value={nom}
        onChangeText={setNom}
      />
      <TouchableOpacity style={globalStyles.btn} onPress={handleAjout}>
        <Text style={globalStyles.btnText}>Ajout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BoardAjout;
