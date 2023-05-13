import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslategrey',
  },
  text: {
    color: '#ffc',
    fontSize: 23,
    textAlign: 'center',
  },
});

Header.defaultProps = {
  title: 'My Shopping List',
};

export default Header;
