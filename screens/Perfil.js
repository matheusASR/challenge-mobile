import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "../styles/menu";

export default function PerfilMenu({ navigation }) {
  const sair = async () => {
    await AsyncStorage.removeItem("usuario");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.containerPerfil}>
      <Image
        source={require("../assets/XP_Inc._Logo.svg.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Perfil:</Text>
      {["Nome", "Email", "Perfil", "Objetivo", "Data de Nascimento"].map(
        (campo, i) => (
          <View key={i} style={styles.infoBoxPerfil}>
            <Text style={styles.infoText}>{campo}: ******</Text>
          </View>
        )
      )}
      <TouchableOpacity onPress={sair} style={styles.sair}>
        <Text style={styles.sairTexto}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
