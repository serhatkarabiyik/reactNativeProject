import React, { useContext } from "react";
import { UserContext } from "../context/userContext";

import { globalStyles } from "../styles/globalStyles";
import { Text } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import { Card, Icon } from "@rneui/themed";

const LongCard = ({ data, nav }) => {
  const { setBoard } = useContext(UserContext);
  const handleClick = () => {
    setBoard(data.boardId);
    nav.navigate("");
  };
  return (
    <Card>
      <TouchableOpacity onPress={handleClick}>
        <Card.Title>{data.name}</Card.Title>
      </TouchableOpacity>
      <Icon name="trash" type="font-awesome" color="#BF0808" />
      <Icon name="pen-square-o" type="font-awesome" color="#1E3050" />
    </Card>
  );
};

export default LongCard;
