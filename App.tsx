import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import MeuBotao from "./componentes/meubotao";
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá Elias!</Text>
      <MeuBotao titulo="Pressione-me" onPress={() => Alert.alert("Botão pressionado!")} />
            <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0055',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: 10,
    borderRadius: 30,
    elevation:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 5, 
      height: 10,
    },
    shadowOpacity: 0.5
  },
  title: {
    fontSize: 40,
    color: 'yellow',
    fontWeight:"500",
  } 
});
