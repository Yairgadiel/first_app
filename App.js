import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import ItemInput from './components/ItemInput';
import Item from './components/Item';

export default function App() {

  const [items, setItems] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);


  const addItemHandler = item => {
    setItems(currentItems => [
      ...currentItems, 
      { key: (Math.random()).toString(), value: item } ]);
    
      setIsAddMode(false);
  }

  const cancelAddItemHandler = () => {    
      setIsAddMode(false);
  }

  const removeItemHandler = itemKey => {
    setItems(currentItems => {
      return currentItems.filter((item) => item.key !== itemKey);
    });
  }

  return (
    <View style={styles.container}>
      <Button title="Add New Item" onPress={() => setIsAddMode(true)}/>
      <ItemInput visible={isAddMode} onItemAdded={addItemHandler} onCancel={cancelAddItemHandler} />
      <FlatList 
        data={items} 
        renderItem={itemData=> <Item onDelete={removeItemHandler} title={itemData.item.value} mykey={itemData.item.key}/>}
        />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff',
    alignContent: 'center',
    justifyContent: 'space-evenly',
  },
});
