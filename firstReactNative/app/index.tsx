import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Image } from 'react-native'
import StyledInput from '../components/styled-input'
//import StyledButton from '../components/styled-button'
import { router } from 'expo-router'
import { Button, ButtonText } from '@/components/ui/button'
import { Text } from '@/components/ui/text'

export default function Login() {

  const handleLogin = () => {
    router.replace('home')
  }

  return (
    <View style={styles.container}>
      <Text bold={true}>Login</Text>
      <Image source={{ uri: 'https://seeklogo.com/images/R/react-native-logo-221C671C70-seeklogo.com.png' }}
      style={styles.image} />

      <StyledInput placeholder='Digite seu login' onChangeText={(text) => console.log(text)}/>
      <StyledInput placeholder='Digite sua senha' onChangeText={(text) => console.log(text)}/>
      
      {/* <StyledButton text='Entrar' onPress={(handleLogin)} color= 'blue' /> */}

      <Button size='md' variant='solid' onPress={handleLogin} className='bg-green-500'> 
        <ButtonText>Login</ButtonText>
      </Button>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain',
  },
})