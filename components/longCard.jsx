import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

import { globalStyles } from "../styles/globalStyles";
import { Text } from "react-native-paper";
import { TouchableOpacity } from "react-native";

const LongCard = ({ data, nav }) => {
  const { setBoard } = useContext(UserContext);
  const handleClick = () => {
    setBoard(data.name);
    nav.navigate("");
  };
  return (
    <TouchableOpacity style={globalStyles.longCard} onPress={handleClick}>
      <Text>{data.name}</Text>
    </TouchableOpacity>
  );
};

export default LongCard;
