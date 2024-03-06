import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { UserContext } from "../context/userContext";
import { ajoutBoard } from "../api/board";

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
    <View style={globalStyles.containerForm}>
      <TextInput
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
