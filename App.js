import{React, useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState();
  
  function somar(){
    setResultado(parseFloat(valor1) + parseFloat(valor2));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Olá!</Text>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Valor 1</Text>
        <TextInput 
            style={styles.input}
            keyboardType="numeric"
            value= {valor1}
            onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}> Valor 2</Text>
        <TextInput 
            style={styles.input}
            keyboardType="numeric"
            value={valor2}
            onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
        style={styles.botao}
          onPress={somar}
          >
          <Text style={styles.textoBotao}>Somar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.bloco}>Resultado: {resultado} </Text> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBloco:{
     fontSize:20,
  },
  texto:{
     color:'#	#B0E0E6',
     fontSize: '30px'
  },
   input:{
    borderColor:'#48D1CC',
    borderWidth:2,
    fontSize:30,
    width:'80%'
   },
   bloco:{
     width:'100%',
     alignItems:'center',
     marginTop:20
   },
   botao:{
      backgroundColor:'#008B8B',
      width:'80%',
      textAlign:'center'
   },
   textoBotao:{
      color:"#7FFFD4",
      fontSize:30
   }
});
