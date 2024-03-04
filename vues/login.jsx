import React, { useContext, useState } from "react";

// API
import { loginUser } from "../api/auth";
import { UserContext } from "../context/userContext";

// component
import { StyleSheet, Text, View, Alert } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import Toast from "react-native-toast-message";

// Utils
import { checkInput } from "../utils";
import { globalStyles } from "../styles/globalStyles";
import StatusBarBackground from "../components/statusBarBg";

const Login = () => {
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    try {
      const user = await loginUser(login, pwd);
      setUser(user);
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erreur",
        text2: "Identifiants non valides !",
        text2Style: {
          fontSize: 14,
        },
      });
    }
  };

  return (
    <>
      <View>
        <StatusBarBackground />
      </View>
      <View style={globalStyles.containerForm}>
        <Toast
          ref={(ref) => {
            Toast.setRef(ref);
          }}
        />
        <Text style={globalStyles.title}>Connexion</Text>
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
            checkInput(pwd, "password")
              ? ""
              : "Le mot de passe doit contenir au moins 6 caractères !"
          }
        />

        <Button
          title="Connexion"
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
          onPress={handleLogin}
        />
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({});
