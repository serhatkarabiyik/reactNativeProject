import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { UserContext } from "../context/userContext";
import { getAllBoard } from "../api/board";
import LongCard from "../components/longCard";

const Home = ({ navigation }) => {
  const [boards, setBoard] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadBoards();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    loadBoards();
  }, []);

  const loadBoards = async () => {
    try {
      const c = await getAllBoard(user.uid);
      console.log(user);
      setBoard(c);
      console.log(c);
    } catch (error) {
      console.error("Error loading boards:", error);
      // Gérer l'erreur de chargement des projets
    }
  };

  return (
    <View style={styles.container}>
      <Text>Liste des projets</Text>
      <FlatList
        data={boards}
        renderItem={({ item }) => <LongCard data={item} />}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  button: {
    backgroundColor: "red",
    width: 100,
    height: 100,
  },
});

export default Home;
