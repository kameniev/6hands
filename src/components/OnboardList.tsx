import React from 'react'
import styled from 'styled-components/native'
import Icon from './UI/Icon'


export default function OnboardLost() {
    return(
        <List>
                    <MainWrapper>
                    <MainImage source={require('../assets/images/1.jpg')}/>
                    <MainText>Егор Крид</MainText>
                    </MainWrapper>

                    <EllipseWrapper><Icon name={'Ellipse'}/></EllipseWrapper>

                    <Wrapper>
                    <Image source={require('../assets/images/4.jpg')}/>
                    <Text>Гусселейман</Text>
                    </Wrapper>

                    <EllipseWrapper><Icon name={'Ellipse'}></Icon></EllipseWrapper>

                    <Wrapper>
                    <Image source={require('../assets/images/2.jpg')}/>
                    <Text>Ирина Шейк</Text>
                    </Wrapper>

                    <EllipseWrapper><Icon name={'Ellipse'}/></EllipseWrapper>

                    <Wrapper>
                    <Image source={require('../assets/images/3.jpg')}/>
                    <Text>Миша Литвин</Text>
                    </Wrapper>

                    <EllipseWrapper><Icon name={'Ellipse'}/></EllipseWrapper>

                    <MainWrapper>
                    <MainImage source={require('../assets/images/4.jpg')}/>
                    <MainText>Кори Тейлор</MainText>
                    </MainWrapper>
                    </List>
    )
}

const Wrapper = styled.View`
flex-direction: row;
margin-bottom: 5px;
`

const Image = styled.Image`
width: 54px;
height: 54px;
border-radius: 47px;
border-color: ${({ theme }) => theme.colors.system.white};
border-width: 2px;
box-shadow: ${({ theme }) => theme.shadow.Search};
`

const Text = styled.Text`
margin-left: 39px;
margin-top: 11px;
font-size: ${({ theme }) => theme.typeScale.Search};
`


const List = styled.View`
margin-top: 32px;
margin-left: 65px;
`


const MainWrapper = styled.View`
flex-direction: row;
margin-bottom: 2px;
margin-left: -22px;
`

const MainImage = styled.Image`
width: 100px;
height: 100px;
border-radius: 250px;
border-color: ${({ theme }) => theme.colors.ui.blue};
border-width: 3px;
box-shadow: ${({ theme }) => theme.shadow.Search};
`

const MainText = styled.Text`
margin-left: 17px;
margin-top: 32px;
font-weight: bold;
font-size: ${({ theme }) => theme.typeScale.OnboardList};
`

const EllipseWrapper = styled.View`
margin-bottom: 2px;
margin-top: 2px;
`

