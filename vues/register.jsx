import React, { useContext, useState } from "react";

// API
import { registerUser } from "../api/auth";
import { UserContext } from "../context/userContext";

// component
import { StyleSheet, Text, View, Alert } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import Toast from "react-native-toast-message";

// Utils
import { checkInput, toastConfig } from "../utils";
import { globalStyles } from "../styles/globalStyles";
import StatusBarBackground from "../components/statusBarBg";

const Register = () => {
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const { setUser } = useContext(UserContext);

  const handleRegister = async () => {
    if ((pwd === confirm && pwd !== "") || pwd != " ") {
      try {
        const user = await registerUser(login, pwd);
        setUser(user);
      } catch (error) {
        if (error.message.includes("invalid-email")) {
          Toast.show({
            type: "error",
            text1: "Erreur",
            text2: "Email non valide !",
            text2Style: {
              fontSize: 14,
            },
            topOffset: 0,
          });
        } else if (error.message.includes("password")) {
          Toast.show({
            type: "error",
            text1: "Erreur",
            text2: "Mot de passe !",
            text2Style: {
              fontSize: 14,
            },
            topOffset: 0,
          });
        } else if (error.message.includes("email-already-in-use")) {
          Toast.show({
            type: "error",
            text1: "Erreur",
            text2: "Email déja utilisé !",
            text2Style: {
              fontSize: 14,
            },
            topOffset: 0,
          });
        } else {
          Toast.show({
            type: "error",
            text1: "Erreur",
            text2: "Veuillez réessayer",
            text2Style: {
              fontSize: 14,
            },
            topOffset: 0,
          });
        }
      }
    }
  };

  return (
    <>
      <View>
        <StatusBarBackground />
      </View>
      <View style={globalStyles.containerForm}>
        <Toast config={toastConfig} />
        <Text style={globalStyles.title}>Inscription</Text>
        <Input
          placeholder="Entrez votre email"
          keyboardType="email-address"
          style={globalStyles.input}
          value={login}
          onChangeText={setLogin}
          leftIcon={<Icon name="supervised-user-circle" size={20} />}
          errorMessage={
            checkInput(login, "email") ? "" : "Entrez un email valide !"
          }
        />
        <Input
          placeholder="Entrez votre mot de passe"
          secureTextEntry={true}
          style={globalStyles.input}
          value={pwd}
          onChangeText={setPwd}
          leftIcon={<Icon name="password" size={20} />}
          errorMessage={
            !checkInput(pwd, "password") &&
            "Le mot de passe doit contenir au moins 6 caractères !"
          }
        />
        <Input
          placeholder="Confirmez votre mot de passe"
          secureTextEntry={true}
          style={globalStyles.input}
          value={confirm}
          onChangeText={setConfirm}
          leftIcon={<Icon name="password" size={20} />}
          errorMessage={
            pwd.length >= 6 &&
            pwd !== confirm &&
            "Les mots de passe ne correspondent pas !"
          }
        />

        <Button
          title="S'inscrire"
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
          onPress={handleRegister}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default Register;
