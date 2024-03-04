import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

// Component
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Avatar, Button } from "@rneui/themed";
import StatusBarBackground from "../components/statusBarBg";

const Profil = ({}) => {
  const { user, setUser } = useContext(UserContext);

  const handleLogout = () => {
    setUser(undefined);
  };

  return (
    <>
      <View>
        <StatusBarBackground />
      </View>
      <ScrollView style={styles.ScrollView}>
        <View style={styles.container}>
          <Avatar
            size={120}
            rounded
            title={user.email.charAt(0).toUpperCase()}
            containerStyle={{ backgroundColor: "blue" }}
          />
          <Text style={styles.title}>{user.email}</Text>

          <Button
            title="Déconnexion"
            buttonStyle={{
              backgroundColor: "blue",
              borderWidth: 1,
              borderColor: "white",
              borderRadius: 30,
              marginVertical: 80,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            titleStyle={{ fontWeight: "bold" }}
            onPress={handleLogout}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 600,
  },
  title: {
    fontSize: 28,
    marginTop: 20,
  },
});

export default Profil;
