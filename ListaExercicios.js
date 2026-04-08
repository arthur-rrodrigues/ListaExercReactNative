import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Switch } from 'react-native';
import Titulo from '../components/Titulo';

export default function ListaExercicios() {
  // Estados para os exercícios
  const [nomeUsuario, setNomeUsuario] = useState(''); // Ex 1
  const [distancia, setDistancia] = useState('');     // Ex 2
  const [tempo, setTempo] = useState('');             // Ex 2
  const [farenheit, setFarenheit] = useState('');     // Ex 3
  const [raio, setRaio] = useState('');               // Ex 4
  const [conta, setConta] = useState('');             // Ex 5
  const [pessoas, setPessoas] = useState('');         // Ex 5
  const [garcom, setGarcom] = useState(false);        // Ex 5
  const [litros, setLitros] = useState('');           // Ex 6
  const [randomData, setRandomData] = useState({ nums: [], data: '' }); // Ex 7

  // Funções de Cálculo
  const calcularVelocidade = () => {
    const v = parseFloat(distancia) / parseFloat(tempo);
    alert(`Velocidade Média: ${v.toFixed(2)} m/s`); // [cite: 10, 11]
  };

  const converterTemp = () => {
    const c = (parseFloat(farenheit) - 32) * 5 / 9; // [cite: 12, 13]
    alert(`Temperatura: ${c.toFixed(2)} °C`);
  };

  const calcularCirculo = () => {
    const c = 2 * Math.PI * parseFloat(raio); // [cite: 14]
    alert(`Circunferência: ${c.toFixed(2)}`);
  };

  const calcularRestaurante = () => {
    let total = parseFloat(conta);
    if (garcom) total *= 1.10; // Taxa de garçom [cite: 15]
    const valorPessoa = total / parseInt(pessoas);
    alert(`Cada um paga: R$ ${valorPessoa.toFixed(2)}`);
  };

  const calcularLeite = () => {
    const bruto = parseFloat(litros) * 2.50; // R$ 2,50 por litro [cite: 18]
    const liquido = bruto * 0.70; // Desconto de 30% de custo [cite: 17]
    alert(`Ganho Líquido: R$ ${liquido.toFixed(2)}`);
  };

  const gerarAleatorios = () => {
    const numeros = Array.from({ length: 5 }, () => Math.floor(Math.random() * 31)); // 0 a 30 [cite: 19]
    const agora = new Date().toLocaleString('pt-BR');
    setRandomData({ nums: numeros, data: agora });
  };

  return (
    <ScrollView style={styles.container}>
      {/* Ex 1: Cumprimento [cite: 9] */}
      <Titulo nome="1 - Boas Vindas" />
      <TextInput style={styles.input} placeholder="Digite seu nome" onChangeText={setNomeUsuario} />
      <Text style={styles.res}>Seja bem vindo {nomeUsuario}</Text>

      {/* Ex 2: Velocidade [cite: 10, 11] */}
      <Titulo nome="2 - Velocidade Média" />
      <TextInput style={styles.input} placeholder="Distância (m)" keyboardType="numeric" onChangeText={setDistancia} />
      <TextInput style={styles.input} placeholder="Tempo (s)" keyboardType="numeric" onChangeText={setTempo} />
      <Button title="Calcular Velocidade" onPress={calcularVelocidade} />

      {/* Ex 3: Temperatura [cite: 12, 13] */}
      <Titulo nome="3 - Farenheit para Celsius" />
      <TextInput style={styles.input} placeholder="Temp em F" keyboardType="numeric" onChangeText={setFarenheit} />
      <Button title="Converter" onPress={converterTemp} color="orange" />

      {/* Ex 4: Círculo [cite: 14] */}
      <Titulo nome="4 - Circunferência" />
      <TextInput style={styles.input} placeholder="Valor do Raio" keyboardType="numeric" onChangeText={setRaio} />
      <Button title="Calcular Círculo" onPress={calcularCirculo} color="green" />

      {/* Ex 5: Restaurante [cite: 15] */}
      <Titulo nome="5 - Conta de Grupo" />
      <TextInput style={styles.input} placeholder="Valor da Conta" keyboardType="numeric" onChangeText={setConta} />
      <TextInput style={styles.input} placeholder="Nº de Pessoas" keyboardType="numeric" onChangeText={setPessoas} />
      <View style={styles.row}>
        <Text>Taxa do Garçom (10%)?</Text>
        <Switch value={garcom} onValueChange={setGarcom} />
      </View>
      <Button title="Dividir Conta" onPress={calcularRestaurante} color="purple" />

      {/* Ex 6: Fazendeiro [cite: 16, 17, 18] */}
      <Titulo nome="6 - Venda de Leite" />
      <TextInput style={styles.input} placeholder="Litros Vendidos" keyboardType="numeric" onChangeText={setLitros} />
      <Button title="Calcular Lucro" onPress={calcularLeite} color="brown" />

      {/* Ex 7: Aleatórios e Data [cite: 19] */}
      <Titulo nome="7 - Sistema e Sorteio" />
      <Button title="Gerar Dados" onPress={gerarAleatorios} color="black" />
      <Text style={styles.res}>Números: {randomData.nums.join(', ')}</Text>
      <Text style={styles.res}>Data/Hora: {randomData.data}</Text>
      
      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  input: { backgroundColor: '#fff', padding: 10, borderRadius: 5, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' },
  res: { fontSize: 16, marginVertical: 10, textAlign: 'center', fontWeight: 'bold' },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }
});
