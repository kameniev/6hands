import * as React from 'react'
import {TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, SafeAreaView} from 'react-native'
import styled from 'styled-components/native'
import LoginInput from 'components/LoginInput'
import ButtonNext from 'components/UI/NextButton'



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
            <LoginInput/>     
            <ButtonNext title={'Далее'} go={() => this.props.history.push('/search')}/>
            </Container>
            </KeyboardAvoidingView> 
            </TouchableWithoutFeedback>
        )
    }
}

export default SecondScreen

const Title = styled.Text`
margin-top: 30%;
color: ${({ theme }) => theme.colors.ui.blue};
text-align: center;
font-size: ${({ theme }) => theme.typeScale.Title};
font-weight: 900;
`

const Container = styled.View`
justify-content: space-around;
`