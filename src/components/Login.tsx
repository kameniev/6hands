import React from 'react'
import styled from 'styled-components/native'
import PasswordInput from '../components/UI/PasswordInput'




const Login = () => {
    return(
        <Container>
            <LoginText>Номер телефона или имя пользователя</LoginText>
            <LoginInput></LoginInput>
            <PasswordText>Пароль</PasswordText>
            <PasswordInput></PasswordInput>        
        </Container>
    )
}

export default Login

const Container = styled.View`
margin-top: 136px;
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



const LoginInput = styled.TextInput`
background: ${props => props.theme.colors.system.white};
box-shadow: ${props => props.theme.shadow.basic};
border-radius: ${props => props.theme.borderRadius.basic};
height: 50px;
margin-top: 5px;
padding-left: 20px;
`

const PasswordText = styled.Text`
color: ${props => props.theme.colors.system.black};
font-size: ${props => props.theme.typeScale.mini};
line-height: ${props => props.theme.lineHeight.mini};
margin-top: 25px;
margin-left: 20px;
opacity: 0.4;
`


