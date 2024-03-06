import React, { useContext, useState, useEffect } from "react";

// API
import { UserContext } from "../context/userContext";

// component
import { StyleSheet, Text, View } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import Toast from "react-native-toast-message";

// Utils
import { globalStyles } from "../styles/globalStyles";
import StatusBarBackground from "../components/statusBarBg";
import { getAllTaskOfColumn } from "../api/task";
import { createColumn } from "../api/column";

const Column = () => {
  const { user, board } = useContext(UserContext);

  //   test create Column update when view when navigation done
  const column = createColumn(user.uid, board, "test2");

  return (
    <>
      <View>
        <StatusBarBackground />
      </View>
    </>
  );
};

export default Column;

const styles = StyleSheet.create({});
