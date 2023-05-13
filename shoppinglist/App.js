import {StyleSheet, FlatList, View, Text} from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
import ListItem from './components/ListItem';
const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Peanut'},
    {id: uuid(), text: 'Jam'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      console.log(id);
      return prevItems.filter(item => item.id !== id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
