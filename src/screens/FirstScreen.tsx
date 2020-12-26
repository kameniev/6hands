import * as React from 'react'
import {Text, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, SafeAreaView} from 'react-native'
import styled from 'styled-components/native'
import Login from 'components/Login'
import ButtonNext from 'components/UI/NextButton'




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
            <Login/>     
            <ButtonNext title={'Войти'} go={() => this.props.history.push('/login')}/>
            </Container>
            </KeyboardAvoidingView> 
            </TouchableWithoutFeedback>
        )
    }
}

export default FirstScreen

const Title = styled.Text`
margin-top: 30%;
color: ${({ theme }) => theme.colors.ui.blue};
font-size: ${({ theme }) => theme.typeScale.Title};
text-align: center;
font-weight: 900;
`


const Container = styled.View`
justify-content: space-around;
`

