import * as React from 'react'
import {Text, View, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, SafeAreaView} from 'react-native'
import styled from 'styled-components/native'
import LoginInput from '../components/UI/LoginInput'
import ButtonNext from '../components/UI/NextButton'



interface SecondScreenProps {
    history: any
  }


class SecondScreen extends React.Component<SecondScreenProps> {
    render() {
        return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
            <Container>
            <Title>handshake</Title>
            <LoginInput></LoginInput>     
            <ButtonNext title={'Далее'} go={() => this.props.history.push('/search')}></ButtonNext>
            </Container>
            </KeyboardAvoidingView> 
            </TouchableWithoutFeedback>
        )
    }
}

export default SecondScreen

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