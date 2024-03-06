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

const Columns = () => {
  const { user, board } = useContext(UserContext);

  const [columns, setColumns] = useState([]);

  useEffect(() => {
    loadColumns();
  }, [board]);

  const loadColumns = async () => {
    try {
      console.log(board);
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
      <View style={globalStyles.containerForm}>
        <Toast config={toastConfig} />
        <Text style={globalStyles.title}>Liste des colonnes</Text>
        <FlatList
          data={columns}
          renderItem={({ item }) => (
            <View>
              <Text style={globalStyles.title}>{item.columnTitle}</Text>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    </>
  );
};

export default Columns;

const styles = StyleSheet.create({});
