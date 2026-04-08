import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Titulo({ nome }) {
  return <Text style={styles.titulo}>Exercício: {nome}</Text>;
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginVertical: 15,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
    paddingBottom: 5,
  },
});
