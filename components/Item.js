import React from 'react';
import {View, Text, StyleSheet, Touchable, TouchableOpacity} from 'react-native';

const Item = props => {
    return (
        <TouchableOpacity onPress={()=>props.onDelete(props.mykey)}>
            <View style={styles.listItem} >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    listItem: {
      fontSize: 15,
      padding: 10,
      marginVertical: 10,
      borderColor: 'black',
      width:'80%',
      alignSelf: 'center',
      alignItems: "center",
      borderWidth: 1,
    },
  });

export default Item;