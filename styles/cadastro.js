
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  logo: {
    width: 160,
    height: 60,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 15,
  },
  input: {
    width: '100%',
    backgroundColor: '#ddd',
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  option: {
    backgroundColor: '#eee',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginVertical: 8,
    width: 200
  },
  optionText: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  backButton: {
    position: 'absolute',
    top: 110,
    left: 30,
    backgroundColor: 'rgb(45, 114, 198)',
    borderRadius: 5,
    width: 80,
    paddingVertical: 8,
    alignItems: 'center',
  },
  backText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
