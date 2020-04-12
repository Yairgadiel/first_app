import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet, Modal} from 'react-native';

const ItemInput = props => {

    const [enteredItem, setEnteredItem] = useState('');

    const itemInputHandler = (enteredText) => {
        setEnteredItem(enteredText);
      }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}> 
                <TextInput 
                    placeholder="holding places"
                    onChangeText={itemInputHandler}
                    value={enteredItem}
                    style={styles.input}/> 
                <View style={styles.actions}>
                    <Button 
                        style={styles.button}
                        title="ADD"
                        onPress={()=>props.onItemAdded(enteredItem)} />
                    <Button 
                        style={styles.button}
                        title="CANCEL"
                        color="red"
                        onPress={()=>props.onCancel()} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: "center",
      flex: 1,
    },
    button: {
      padding: 10,
    },
    actions: {
        justifyContent: "center",
        flexDirection: "row",
    },
    input: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      textAlign: "center",
      alignSelf: 'center',
      width: '70%',
      fontSize: 20,
      padding: 10,
      margin: 30,
    },
  });

export default ItemInput;