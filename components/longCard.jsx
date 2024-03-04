import React, { UserContext } from "react";
import { UserContext } from "../context/userContext";

import { globalStyles } from "../globalStyles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-paper";

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
