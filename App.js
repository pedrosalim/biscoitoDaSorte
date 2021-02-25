import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity, ProgressViewIOSComponent } from 'react-native'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textPhrase: '',
      img: require('./src/biscoito.png'),
      buttonText: 'ABRIR BISCOITO'
    }

    this.breakCookie = this.breakCookie.bind(this)
    this.backCookie = this.backCookie.bind(this)

    this.phrases = [
      'He was waiting for the rain to stop.',
      "She was upset when it didn't boil.",
      'You have been sleeping for a long time.',
      'You might enjoy a massage.',
      'Kenedy vagabundo'
    ]
  }

  breakCookie() {
    let randonNumber = Math.floor(Math.random() * this.phrases.length)

    this.setState({
      buttonText: "BISCOITO ABERTO!!",
      textPhrase: ' "' + this.phrases[randonNumber] + '" ',
      img: require('./src/biscoitoAberto.png')
    })
  }

  backCookie() {
    this.setState({
      buttonText: "ABRIR BISCOITO",
      textPhrase: "",
      img: require('./src/biscoito.png')
    })
  }

  render(){
    return(
      <View style={styles.container}>
        
        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textPhrase}> {this.state.textPhrase} </Text>

        <TouchableOpacity style={styles.button} onPress={this.breakCookie}>
          <View style={styles.buttonArea}>
            <Text style={styles.buttonText}>{ this.state.buttonText }</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.backCookie}>
          <View style={styles.buttonArea}>
            <Text style={styles.buttonText}>RESETAR BISCOITO</Text>
          </View>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textPhrase: {
    fontSize: 20,
    color: '#DD7B22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#DD7B22',
    borderRadius: 18,
    marginBottom: 10
  },
  buttonArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#DD7B22'
  }
})

export default App