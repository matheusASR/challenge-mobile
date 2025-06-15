
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerPerfil: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 30,
    marginBottom: 80,
    marginLeft: 45,
    alignSelf: 'flex-start'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25,
    alignSelf: 'flex-start',
    marginLeft: 45
  },
  card: {
    backgroundColor: '#ddd',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    width: 300
  },
  cardTitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  botao: {
    backgroundColor: '#000',
    padding: 8,
    marginTop: 10,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold'
  },
  infoBox: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 260
  },
  infoBoxPerfil: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 300
  },
  infoText: {
    color: '#333'
  },
  sair: {
    marginTop: 20,
    alignItems: 'center'
  },
  sairTexto: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 80
  }
});
