import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { UserContext } from "../context/userContext";
import { getAllBoard } from "../api/board";
import LongCard from "../components/longCard";

const Home = ({}) => {
  const [boards, setBoard] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    (async () => {
      const c = await getAllBoard(user.uid);
      setBoard(c);
      console.log(c);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Liste des projets</Text>
      <FlatList
        data={boards}
        renderItem={({ item }) => <LongCard data={item} nav={navigation} />}
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
