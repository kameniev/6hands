import React from 'react'
import styled from 'styled-components/native'
import PasswordInput from './PasswordInput'




const Login = () => {
    return(
        <Container>
            <LoginText>Номер телефона или имя пользователя</LoginText>
            <LoginInput/>
            <PasswordText>Пароль</PasswordText>
            <PasswordInput/>        
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
margin-left: 20px;
color: ${({ theme }) => theme.colors.system.black};
font-size: ${({ theme }) => theme.typeScale.InputHeader};
line-height: ${({ theme }) => theme.lineHeight.InputHeader};
opacity: 0.4;
`



const LoginInput = styled.TextInput`
height: 50px;
margin-top: 5px;
padding-left: 20px;
border-radius: ${({ theme }) => theme.borderRadius.Input};
background: ${({ theme }) => theme.colors.system.white};
box-shadow: ${({ theme }) => theme.shadow.basic};
`

const PasswordText = styled.Text`
margin-top: 25px;
margin-left: 20px;
color: ${({ theme }) => theme.colors.system.black};
font-size: ${({ theme }) => theme.typeScale.InputHeader};
line-height: ${({ theme }) => theme.lineHeight.InputHeader};
opacity: 0.4;
`


