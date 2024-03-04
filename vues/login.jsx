import React, { useContext, useState } from "react";

// API
import { loginUser } from "../api/auth";
import { UserContext } from "../context/userContext";

// component
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Input, Button } from "@rneui/themed";

import { globalStyles } from "../styles/globalStyles";
import StatusBarBackground from "../components/statusBarBg";

const Login = () => {
  const [login, setLogin] = useState("");
  const [pwd, setPwd] = useState("");
  const { setUser } = useContext(UserContext);

  const handleLogin = async () => {
    if (pass === confirm) {
      try {
        const user = await loginUser(login, pwd);
        setUser(user);
      } catch (error) {
        Alert.alert(error.message);
      }
    }
  };

  return (
    <>
      <View>
        <StatusBarBackground />
      </View>
      <View>
        <Text style={globalStyles.title}>Connexion</Text>
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
