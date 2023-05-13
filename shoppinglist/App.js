import {StyleSheet, FlatList, View, Text} from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import 'react-native-get-random-values';
import {v4 as uuid} from 'uuid';
const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text: 'Milk'},
    {id: uuid(), text: 'Bread'},
    {id: uuid(), text: 'Peanut'},
    {id: uuid(), text: 'Jam'},
  ]);

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.text}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
