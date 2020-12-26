import React from 'react'
import {TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import searchData from 'data/searchData'



function SearchFlatList() {

    const renderSearchItem = ({item}) => {
        return(
            <TouchableOpacity>
            <Wrapper>
            <Image source={item.image}></Image>
            <Text>{item.title}</Text>
            </Wrapper>
            </TouchableOpacity>
        )
    }


        return(
            
                <FlatList data={searchData} renderItem={renderSearchItem}></FlatList>
            
        )
    
}

export default SearchFlatList

const FlatList = styled.FlatList`
margin-top: 32px;
margin-left: 12px;
`


const Wrapper = styled.View`
flex-direction: row;
margin-bottom: 20px;
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