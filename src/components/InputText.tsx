import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { boolean, string } from 'yup';


const inputTextPropTypes={
   headerText: string, onChangeText: string, value: string, secureTextEntry: boolean, placeholder: string, isVisible:boolean}


const InputText = (props: typeof inputTextPropTypes ) => {
  const {headerText,onChangeText,value,secureTextEntry,placeholder,isVisible,isVisibleHandler}= props
  return (
    <View style={{marginTop: 20}}>
              <Text>{headerText}</Text>
              <View style={{flexDirection:"row",backgroundColor:"#F6F6F5",marginTop:10,height:50,justifyContent:"center",alignItems:"center",alignContent:'center'}}>
                <TextInput
                  placeholder={placeholder}
                  onChangeText={onChangeText}
                  value={value}
                  backgroundColor={'#fff'}
                  textColor={'#1d1d1b'}
                  secureTextEntry={secureTextEntry}
                  style={[
                    {
                      borderRadius: 5,
                      borderColor: '#f0f0f0',
                      padding: 10,
                      elevation: 2,
                      backgroundColor: '#F6F6F5',
                      flex:1,
                    },
                  ]}
                  returnKeyType={'done'}
                />
              {isVisible===true?  <TouchableOpacity onPress={isVisibleHandler}>
                <Text>Hide</Text>
                </TouchableOpacity> : null}
              </View>
            </View>
  )
}

export default InputText

const styles = StyleSheet.create({})