import React, { useContext, useState } from "react";

// API
import { registerUser } from "../api/auth";
import { UserContext } from "../context/userContext";

// component
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Input, Button } from "@rneui/themed";

import { globalStyles } from "../styles/globalStyles";

const Register = () => {
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const { setUser } = useContext(UserContext);

  const handleRegister = async () => {
    if (pass === confirm) {
      try {
        const user = await registerUser(login, pwd);
        setUser(user);
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };

  return (
    <View>
      <Text style={globalStyles.title}>S'inscrire</Text>
      <Input
        placeholder="Entrez votre email"
        keyboardType="email-adress"
        style={globalStyles.input}
        value={login}
        onChangeText={setLogin}
      />
      <Input
        placeholder="Entrez votre mot de passe"
        secureTextEntry={true}
        style={globalStyles.input}
        value={pwd}
        onChangeText={setPwd}
      />
      <Input
        placeholder="Confirmez votre mot de passe"
        secureTextEntry={true}
        style={globalStyles.input}
        value={confirm}
        onChangeText={setConfirm}
      />

      <Button
        title="S'inscrire"
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
        onPress={handleRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Register;
