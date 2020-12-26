import * as React from 'react';
import styled from 'styled-components/native'
import {StyleSheet} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'






type ButtonProps = {
    title: string,
}

const ButtonNext = ( {title} : ButtonProps) => {
   
    return(
   
       
            <NextButton><LinearGradient
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


const NextButton = styled.View`
display: flex;
width: 284px;
height: 50px;
margin-top: -35%;
margin-right: 8%;
border-radius: ${({ theme }) => theme.borderRadius.Button};
`

const NextButtonText = styled.Text`
text-align: center;
color: ${({ theme }) => theme.colors.ui.gray};
font-size: ${({ theme }) => theme.typeScale.NextButton};
line-height: ${({ theme }) => theme.lineHeight.NextButton};
`