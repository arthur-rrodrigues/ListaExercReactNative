import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// Importando a página que contém os 7 exercícios
import ListaExercicios from './pages/ListaExercicios'; 

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ListaExercicios />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
