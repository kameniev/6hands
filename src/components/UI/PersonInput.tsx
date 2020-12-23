import React from 'react'
import styled from 'styled-components/native'
import Icon from './Icon'
import EyeIcon1 from '../../assets/eye-line-1.svg'
import {TextInput, View, TouchableOpacity} from 'react-native'





export default class PasswordInput extends React.Component {

 
    render() {
        return(
            <Container>
            <PersonText>Никнейм или имя пользователя</PersonText>
           <InputContainer>
              <PersonTextInput></PersonTextInput>
              <TouchableOpacity><Flag><Icon name={'Search'}></Icon></Flag></TouchableOpacity>
           </InputContainer>
           </Container>
        )
    }
}


const Container = styled.View`
padding-left: 10px;
padding-right: 10px;
`

const InputContainer = styled.View`
flex-direction: row;
background: ${props => props.theme.colors.system.white};
box-shadow: ${props => props.theme.shadow.basic};
border-radius: ${props => props.theme.borderRadius.basic};
height: 50px;
margin-top: 5px;
padding-left: 20px;
`


const PersonTextInput = styled.TextInput`
flex: 1;
margin-right: 8px;

`

const PersonText = styled.Text`
color: ${props => props.theme.colors.system.black};
font-size: ${props => props.theme.typeScale.mini};
line-height: ${props => props.theme.lineHeight.mini};
margin-left: 20px;
opacity: 0.4;
`


const Flag = styled.View`
width: 15px;
height: 15px;
margin-right: 17px;
margin-top: 18px;

`


