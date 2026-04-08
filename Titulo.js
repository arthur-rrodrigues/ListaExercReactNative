import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import ListaExercicios from './pages/ListaExercicios';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ListaExercicios />
    </SafeAreaView>
  );
}
