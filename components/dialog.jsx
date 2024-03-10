import { Dialog, Text } from "@rneui/themed";
import React from "react";

const DialogComponent = ({
  visible,
  onBackdropPress,
  deleteAction,
  cancelAction,
}) => {
  return (
    <Dialog isVisible={visible} onBackdropPress={onBackdropPress}>
      <Dialog.Title title="Voulez vous vraiment supprimé ? " />
      <Text>
        Cette action est irréversible et toutes les données associées seront
        perdues.
      </Text>
      <Dialog.Actions>
        <Dialog.Button title="Supprimer" onPress={deleteAction} />
        <Dialog.Button title="Annuler" onPress={cancelAction} />
      </Dialog.Actions>
    </Dialog>
  );
};

export default DialogComponent;
