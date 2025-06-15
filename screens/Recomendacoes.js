import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { styles } from '../styles/menu';

const dados = [
  { id: '1', titulo: 'Carteira Conservadora', descricao: '70% Renda Fixa, 30% CDBs' },
  { id: '2', titulo: 'Carteira Moderada', descricao: '50% Renda Fixa, 30% Fundos, 20% Ações' }
];

export default function RecomendacoesMenu() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/XP_Inc._Logo.svg.png')} style={styles.logo} />
      <Text style={styles.title}>Recomendações:</Text>
      <FlatList
        data={dados}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <Text>{item.descricao}</Text>
            <TouchableOpacity style={styles.botao}><Text style={styles.botaoTexto}>Ver</Text></TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}