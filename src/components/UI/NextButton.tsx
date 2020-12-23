import * as React from 'react';
import styled from 'styled-components/native'
import {ImagePropTypes, View, StyleSheet} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'






type ButtonProps = {
    title: string,
    go: Function
}

const ButtonNext = ( {title, go} : ButtonProps) => {
   
    return(
   
       
            <NextButton onPress={() => go()}><LinearGradient
            colors={['#36D1DC', '#5B86E5']}
            start={[0, 0.5]}
            end={[1, 0.5]}
            locations={[0.1153, 0.9143]}
            style={styles.gradient}
          ><NextButtonText>{title}</NextButtonText></LinearGradient></NextButton>
            
       
        )
    
    
}

export default ButtonNext

const styles = StyleSheet.create({
    gradient: {
        width: 284,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center'
    }
})


const NextButton = styled.TouchableOpacity`
width: 284px;
display: flex;
margin-top: 50px;
height: 50px;
margin-left: auto;
margin-right: auto;
border-radius: ${props => props.theme.borderRadius.enlarged};
`

const NextButtonText = styled.Text`
text-align: center;
color: ${props => props.theme.colors.ui.gray};
font-size: ${props => props.theme.typeScale.main};
line-height: ${props => props.theme.lineHeight.main};
`