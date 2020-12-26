import * as React from 'react'
import {TouchableWithoutFeedback, Keyboard, SafeAreaView, TouchableOpacity, FlatList} from 'react-native'
import styled from 'styled-components/native'
import IconTextInput from 'components/UI/IconTextInput'
import SearchFlatList from 'components/SearchFlatList'
import searchData from 'data/searchData'







class MainScreen extends React.Component {

    renderSearchItem = ({item}) => {
        return(
            <TouchableOpacity>
            <Wrapper>
            <Image source={item.image}></Image>
            <Text>{item.title}</Text>
            </Wrapper>
            </TouchableOpacity>
        )
    }

    headerComponent = () => {
        return(
            <HeaderWrapper>
            <IconTextInput title={"Никнейм или имя пользователя"} icon={'Search'}/>
            <Subtitle>Рукопожатия со звёздами</Subtitle>
            </HeaderWrapper>
        )
    }

    render() {
        return(
            <SafeAreaView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
            
            
            
            <FlatList data={searchData} renderItem={this.renderSearchItem} ListHeaderComponent={this.headerComponent}></FlatList>
            
            
            </Container>
            </TouchableWithoutFeedback>
            </SafeAreaView>
        )
    }
}

export default MainScreen

const HeaderWrapper = styled.View`
margin-bottom: 32px;
`

const Subtitle = styled.Text`
margin-top: 30px;
color: ${({ theme }) => theme.colors.ui.blue};
font-size: ${({ theme }) => theme.typeScale.Subtitle};
line-height: ${({ theme }) => theme.lineHeight.Subtitle};
font-weight: bold;
text-align: center;
`

const Container = styled.View`
justify-content: space-around;
`



const Wrapper = styled.View`
flex-direction: row;
margin-bottom: 20px;
margin-left: 12px;
`

const Image = styled.Image`
width: 54px;
height: 54px;
border-radius: 47px;
border-width: 2px;
border-color: ${({ theme }) => theme.colors.system.white};
box-shadow: ${({ theme }) => theme.shadow.Search};
`

const Text = styled.Text`
margin-left: 26px;
margin-top: 11px;
font-size: ${({ theme }) => theme.typeScale.Search};
`

