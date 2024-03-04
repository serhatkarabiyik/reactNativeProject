import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { getAllTask } from "../api/task";
import { UserContext } from "../context/userContext";

const Home = ({}) => {
  const [tasks, setTasks] = useState([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    (async () => {
      const c = await getAllTask(user.uid);
      setCarnets(c);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Liste des tâches</Text>
      <FlatList
        data={tasks}
        renderItem={{ item }}
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
