import React from 'react'
import styled from 'styled-components/native'





const LoginInput = () => {
    return(
        <Container>
            <LoginText>Введите свой логин</LoginText>
            <LoginTextInput></LoginTextInput>      
        </Container>
    )
}

export default LoginInput

const Container = styled.View`
margin-top: 232px;
padding-left: 10px;
padding-right: 10px;
`

const LoginText = styled.Text`
color: ${props => props.theme.colors.system.black};
font-size: ${props => props.theme.typeScale.mini};
line-height: ${props => props.theme.lineHeight.mini};
margin-left: 20px;
opacity: 0.4;
`



const LoginTextInput = styled.TextInput`
background: ${props => props.theme.colors.system.white};
box-shadow: ${props => props.theme.shadow.basic};
border-radius: ${props => props.theme.borderRadius.basic};
height: 50px;
margin-top: 5px;
padding-left: 20px;
`



