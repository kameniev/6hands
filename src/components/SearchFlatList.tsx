import React from 'react'
import {FlatList, TouchableOpacity} from 'react-native'
import styled from 'styled-components/native'
import searchData from '../data/searchData'



function SearchFlatList() {

    const renderSearchItem = ({item}) => {
        return(
            <TouchableOpacity>
            <ItemWrapper>
            <ItemImage source={item.image}></ItemImage>
            <ItemText>{item.title}</ItemText>
            </ItemWrapper>
            </TouchableOpacity>
        )
    }


        return(
            <SearchWrapper>
                <FlatList data={searchData} renderItem={renderSearchItem}></FlatList>
            </SearchWrapper>
        )
    
}

export default SearchFlatList



const SearchWrapper = styled.View`
margin-top: 32px;
margin-left: 12px;
`

const ItemWrapper = styled.View`
flex-direction: row;
margin-bottom: 20px;
`

const ItemImage = styled.Image`
width: 54px;
height: 54px;
border-radius: 47px;
border-color: ${props => props.theme.colors.system.white};
border-width: 2px;
box-shadow: ${props => props.theme.shadow.search};
`

const ItemText = styled.Text`
margin-left: 26px;
margin-top: 11px;
font-size: ${props => props.theme.typeScale.search};
`