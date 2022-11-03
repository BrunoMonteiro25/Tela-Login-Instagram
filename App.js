import { StatusBar } from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

import { FontAwesome5 } from '@expo/vector-icons'

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar backgroundColor="#fff" translucent={false} />

          <Image
            source={require('./src/assets/logo-instagram.png')}
            style={styles.logo}
          />
          <TextInput
            placeholder="Celular, username ou email"
            style={styles.input}
          />
          <TextInput placeholder="Sua senha" style={styles.input} />

          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Acessar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.facebookButton}>
            <FontAwesome5 name="facebook" size={25} color="#399fff" />
            <Text style={styles.facebookText}>Continue como Bruno</Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.divisorLine}></View>
            <Text style={{ marginHorizontal: '3%' }}>OU</Text>
            <View style={styles.divisorLine}></View>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Não possui conta?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpButton}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginTop: Platform.OS === 'android' ? '30%' : '20%',
    marginBottom: Platform.OS === 'android' ? '13%' : '15%',
  },
  input: {
    width: '90%',
    height: 42,
    backgroundColor: '#f4f3f3',
    marginBottom: 20,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  forgotContainer: {
    width: '90%',
    alignItems: 'flex-end',
  },
  forgotText: {
    color: '#399fff',
  },
  loginButton: {
    width: '90%',
    height: 42,
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#399fff',
    borderRadius: 5,
  },
  loginText: {
    color: '#fff',
    fontSize: 17,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '15%',
  },
  facebookText: {
    color: '#399fff',
    paddingLeft: 8,
    fontSize: 15,
  },
  divisor: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  divisorLine: {
    backgroundColor: '#efeded',
    width: '44%',
    height: 2,
    borderRadius: 5,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: '10%',
    alignItems: 'center',
  },
  signUpText: {
    color: '#b1b1b1',
  },
  signUpButton: {
    paddingLeft: 5,
    color: '#399fff',
    fontWeight: 'bold',
  },
})
