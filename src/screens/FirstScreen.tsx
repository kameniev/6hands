import * as React from 'react'
import {Text, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, SafeAreaView} from 'react-native'
import styled from 'styled-components/native'
import Login from '../components/Login'
import ButtonNext from '../components/UI/NextButton'
import {LinearGradient} from 'expo-linear-gradient'



interface FirstScreenProps {
    history: any
  }

class FirstScreen extends React.Component<FirstScreenProps> {
    render() {
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <Container>
            <Title>handshake</Title>
            <Login></Login>     
            <ButtonNext title={'Войти'} go={() => this.props.history.push('/login')}></ButtonNext>
            </Container>
            </KeyboardAvoidingView> 
            </TouchableWithoutFeedback>
        )
    }
}

export default FirstScreen

const Title = styled.Text`
color: ${props => props.theme.colors.ui.blue};
text-align: center;
font-size: ${props => props.theme.typeScale.big};
margin-top: 110px;
font-weight: 900;
`

const Container = styled.View`

justifyContent: space-around;
`