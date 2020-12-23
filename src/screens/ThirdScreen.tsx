import * as React from 'react'
import {TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, ScrollView, SafeAreaView} from 'react-native'
import styled from 'styled-components/native'
import PersonInput from '../components/UI/PersonInput'
import SearchFlatList from '../components/SearchFlatList'







class ThirdScreen extends React.Component {
    render() {
        return(
            <SafeAreaView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
            <ScrollView showsVerticalScrollIndicator={false}>

            <PersonInput></PersonInput> 
            <Subtitle>Знаком ли я с...?</Subtitle>
            
            <SearchFlatList></SearchFlatList>
            
            </ScrollView>
            </Container>
            </TouchableWithoutFeedback>
            </SafeAreaView>
        )
    }
}

export default ThirdScreen

const Subtitle = styled.Text`
color: ${props => props.theme.colors.ui.blue};
font-size: ${props => props.theme.typeScale.medium};
line-height: ${props => props.theme.lineHeight.medium};
text-align: center;
margin-top: 30px;
`

const Container = styled.View`

justifyContent: space-around;
`



