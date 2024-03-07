import React, { useContext, useState, useEffect } from "react";

// API
import { UserContext } from "../context/userContext";
import { createColumn, getAllColumnOfBoard } from "../api/column";

// component
import { StyleSheet, Text, View, FlatList } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import Toast from "react-native-toast-message";
import StatusBarBackground from "../components/statusBarBg";

// Utils
import { globalStyles } from "../styles/globalStyles";
import { toastConfig } from "../utils";
import ColumnCard from "../components/columnCard";
import { ScrollView } from "react-native-gesture-handler";

const Columns = ({ navigation }) => {
  const { user, board } = useContext(UserContext);

  const [columns, setColumns] = useState([]);

  useEffect(() => {
    loadColumns();

    const interval = setInterval(() => {
      loadColumns();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const loadColumns = async () => {
    try {
      const columns = await getAllColumnOfBoard(board);
      setColumns(columns);
    } catch (error) {
      console.error("Error loading columns:", error);
      setColumns([]);
    }
  };

  return (
    <>
      <View>
        <StatusBarBackground />
      </View>
      <Toast config={toastConfig} />
      <ScrollView style={globalStyles.paddingTop}>
        <Text style={globalStyles.title}>Liste des colonnes</Text>
        <FlatList
          data={columns}
          renderItem={({ item }) => (
            <ColumnCard data={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.name}
        />
      </ScrollView>
    </>
  );
};

export default Columns;

const styles = StyleSheet.create({});
