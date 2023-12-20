import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

const LoginApple = props => {
  const {style,text} = props;

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderWidth: 0.444,
          borderColor: '#C1C2B8',
          borderRadius: 5,
          padding: 15,
          alignItems: 'center',
        },
        style,
      ]}>
      <Image
        style={{height: 25, width: 25, resizeMode: 'contain', left: '28%'}}
        source={require('../../assets/images/apple.png')}></Image>
      <Text style={{fontSize: 14}}>{text}</Text>
      <View />
    </View>
  );
};

export default LoginApple;
