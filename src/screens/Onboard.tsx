import React from 'react'
import {View, StatusBar, StyleSheet} from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import styled from 'styled-components/native'
import Icon from 'components/UI/Icon'
import OnboardButton from 'components/OnboardButton'
import {ui} from 'utils/colors'
import OnboardList from 'components/OnboardList'


const data = [
    {
      id: 1,
      title: 'Найди общих знакомых',
      text: 'Приложение основывается на теории 6-ти \n рукопожатий - любые два человека на \n Земле разделены не более чем пятью \n уровнями общих знакомых.',
    },
    {
      id: 2,
      title: 'Насколько близко \n ты близко к звёздам?',
      text: 'Приложение поможет найти цепочку связей \n практически с любым пользователем.',
    },
    {
      id: 3,  
      title: 'Человека определяет \n его окружение',
      text: "Поставь себе цель - уменьшить цепочку \n связей",
    },
  ];
  

  type OnboardProps = {
    handleDone: Function
  } 

const Onboard = ({handleDone} : OnboardProps) => {

    const renderItem = ({item}) => {
        switch (item.id){
            case 1: 
                return(
                <View>
                    <Title>{item.title}</Title>
                    <MainTextFS>{item.text}</MainTextFS>
                    <IconWrapper><Icon name={'Stars'} width={303}/></IconWrapper>
                </View>
                )
            case 2:
                return(
                    <View>
                    <Title>{item.title}</Title>
                    <Subtitle>{item.text}</Subtitle>

                    <OnboardList/>
                </View>
                )
            case 3:
                return(
                    <View>
                    <Title>{item.title}</Title>
                    <Subtitle>{item.text}</Subtitle>
                    <List>
                    <MainWrapper>
                    <MainImage source={require('../assets/images/1.jpg')}/>
                    <MainText>Егор Крид</MainText>
                    </MainWrapper>

                    <ConnectorWrapper><Icon name={'Connector'}/></ConnectorWrapper>

                    <MainWrapper>
                    <MainImage source={require('../assets/images/2.jpg')}/>
                    <MainText>Кори Тейлор</MainText>
                    </MainWrapper>
                    </List>
                </View>
                )
            default:
                return null
        }
       
    }

    const keyExtractor = (item) => item.title

    const renderDoneButton = () => {
        return(
          
          <OnboardButton title={"Начать"}/>
          
        )
    }

    const handleDoneFinish = () => [
        handleDone()
    ]

    return(
        <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          data={data}
          renderDoneButton={renderDoneButton}
          dotStyle={styles.dotStyle}
          activeDotStyle={styles.activeDotStyle}
          onDone={handleDoneFinish}
        />
      </View>
    )
}

export default Onboard

const Title = styled.Text`
margin-top: 25%;
text-align: center;
line-height: ${({ theme }) => theme.lineHeight.OnboardTitle};
font-size: ${({ theme }) => theme.typeScale.OnboardTitle};
color: ${({ theme }) => theme.colors.ui.OnboardBlue};
`

const MainTextFS = styled.Text`
margin-top: 50px;
text-align: center;
line-height: ${({ theme }) => theme.lineHeight.OnboardMain};
font-size: ${({ theme }) => theme.typeScale.OnboardMain};
color: ${({ theme }) => theme.colors.ui.OnboardGray};
`

const Subtitle = styled.Text`
margin-top: 32px;
text-align: center;
line-height: ${({ theme }) => theme.lineHeight.OnboardMain};
font-size: ${({ theme }) => theme.typeScale.OnboardMain};
color: ${({ theme }) => theme.colors.ui.OnboardGray};
`

const IconWrapper = styled.View`
border: 1px solid black;
width: 303px;
height: 368px;
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

const ConnectorWrapper = styled.View`

`

const styles = StyleSheet.create({
  dotStyle: {
    width: 8,
    height: 8,
    marginHorizontal: 15,
    backgroundColor: '#DFDFDF',
    
  },
  activeDotStyle: {
    width: 14,
    height: 14,
    marginHorizontal: 9,
    borderRadius: 50,
    backgroundColor: ui.blue
    
  }
})

