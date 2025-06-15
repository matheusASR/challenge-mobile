import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles/menu';

const investimentos = [
  { id: '1', nome: 'Tesouro Selic', retorno: '9.25% a.a.' },
  { id: '2', nome: 'Fundo Multimercado XP', retorno: '12.40% a.a.' }
];

export default function InvestimentosMenu() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/XP_Inc._Logo.svg.png')} style={styles.logo} />
      <Text style={styles.title}>Seus investimentos:</Text>
      <FlatList
        data={investimentos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text>Retorno: {item.retorno}</Text>
            <TouchableOpacity style={styles.botao}><Text style={styles.botaoTexto}>Ver</Text></TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}