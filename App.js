import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState(0);

  function somar(){
    setResultado(parseFloat(valor1) + parseFloat(valor2));
  }
  function subtrair(){
    setResultado(parseFloat(valor1) - parseFloat(valor2));
  }
  function dividir(){
    setResultado(parseFloat(valor1) / parseFloat(valor2));
  }
  function multiplicar(){
    setResultado(parseFloat(valor1) * parseFloat(valor2));
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Calculadora</Text>  <p>

      </p>
        <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/2374/2374370.png',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor 1</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor 2</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao1}
          onPress={somar}
        >
            <Text style={styles.textoBotao1}>Somar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao2}
          onPress={subtrair}
        >
            <Text style={styles.textoBotao2}>Subtrair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao3}
          onPress={dividir}
        >
            <Text style={styles.textoBotao3}>Dividir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao4}
          onPress={multiplicar}
        >
            <Text style={styles.textoBotao4}>Multiplicar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Resultado: {resultado}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B0E0E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBloco:{
    fontSize:20,
  },
  texto:{
    color:'#000',
    fontSize:30
  },
  input:{
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao1:{
    backgroundColor:'#3CB371',
    width:'80%',
    textAlign:'center'
  },
  botao2:{
    backgroundColor:'#00CED1',
    width:'80%',
    textAlign:'center'
  },
  botao3:{
    backgroundColor:'#D2691E',
    width:'80%',
    textAlign:'center'
  },
  botao4:{
    backgroundColor:'#B22222',
    width:'80%',
    textAlign:'center'
  },
  textoBotao1:{
    color:"#fff",
    fontSize:30
  },
  textoBotao2:{
    color:"#fff",
    fontSize:30
  },
  textoBotao3:{
    color:"#fff",
    fontSize:30
  },
  textoBotao4:{
    color:"#fff",
    fontSize:30
  }, 
  logo:{
    width:70,
    height:70
  }
});