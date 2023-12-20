import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const FullButton = ({backgroundColor,title,titleColor,style,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{backgroundColor: backgroundColor, padding: 20, marginTop: 10,borderRadius:5},style]}>
    <Text style={{alignSelf: 'center',color:titleColor}}>{title}</Text>
  </TouchableOpacity>
  )
}

export default FullButton