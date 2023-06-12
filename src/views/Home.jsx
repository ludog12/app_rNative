import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, TouchableOpacity, View, ImageBackground  } from 'react-native';


export default function Home({ navigation }) {

  return (
    <ImageBackground
      source={ require('../img/fondo.jpg' )}
      style={styles.background}
    >
      <View style={styles.container}>


      <Text style={styles.titulo}>Bienvenido</Text>
      <View style={styles.conteiner}>
        <Text style={styles.text}>  Ésta app muestra una lista de fotos de perros de manera aleatoria a traves de una API. </Text>
      </View>
      <TouchableOpacity 
        onPress={() => {
          navigation.navigate('dogList')
        }}
        style={{ 
          width: 200, 
          height: 100, 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <ImageBackground 
          source={require('../img/boton.png')} 
          style={{ 
            width: '100%', 
            height: '100%', 
            justifyContent: 'center', 
            alignItems: 'center' 
          }}
        >
          <Text style={{ color: '#415561', fontSize: 18, fontWeight: 'bold' }}>Mostrar</Text>
        </ImageBackground>
      </TouchableOpacity>



    </View>
      
    </ImageBackground>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view1: {
    position: 'relative',
    marginTop: 30,
  },
  conteiner:{
    width:250,
    

  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  titulo: {
    fontWeight: 'bold',
    top: -200,
    bottom:300,
    fontSize: 50,
    color: "#F4EDEA",
    fontFamily: "Roboto",
    textShadowColor:'#0A141F',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius:20,
  },
  text:{
    fontWeight: 'bold',
    fontSize:25,
    top:-100,
    color: '#F4EDEA',
    textShadowColor:'#0A141F',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius:20,
  },
  button:{
    borderRadius:20,
    
  },
});