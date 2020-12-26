import React from 'react'
import styled from 'styled-components/native'
import Icon from './UI/Icon'
import {TouchableOpacity} from 'react-native'





export default class PasswordInput extends React.Component<{}, {secureTextEntry: boolean}> {

    constructor(props){
        super(props);
        this.state = {
            secureTextEntry: true
        }
    }

    onIconPress = () => {
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }

    render() {
        return(
           <Container>
              <PasswordTextInput secureTextEntry={this.state.secureTextEntry}/>
              <TouchableOpacity onPress={this.onIconPress}><Flag><Icon name={this.state.secureTextEntry ? 'EyeIcon1' : 'EyeIcon2'}/></Flag></TouchableOpacity>
           </Container>
        )
    }
}

const Container = styled.View`
flex-direction: row;
height: 50px;
margin-top: 5px;
padding-left: 20px;
border-radius: ${({ theme }) => theme.borderRadius.Input};
background: ${({ theme }) => theme.colors.system.white};
box-shadow: ${({ theme }) => theme.shadow.basic};

`


const PasswordTextInput = styled.TextInput`
flex: 1;
margin-right: 8px;

`



const Flag = styled.View`
width: 22px;
height: 16px;
margin-right: 15px;
margin-top: 17px;

`


