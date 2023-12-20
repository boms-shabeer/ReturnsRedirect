import React from 'react';
import {
  SafeAreaView,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';
import FullButton from '../../components/FullButton';

type LandingProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Landing'>;
};

const Landing: React.FC<LandingProps> = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/icon.png')}
        />
        <Image
          style={styles.backgroundLogo}
          source={require('../../../assets/images/icon.png')}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>WELCOME</Text>
        <Text style={styles.largeText}>Return Redirect</Text>
        <Text style={styles.normalText}>
          We serve you with the best products for your need
        </Text>
        <FullButton
          title={'Brows Shop'}
          backgroundColor={'#fff'}
          titleColor={'#000'}
          style={styles.button}
          onPress={() => {
            navigation.navigate('BottomTabNavigator');
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#37A585',
    flex: 1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 7,
    flexDirection: 'row',
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    left: '28%',
  },
  backgroundLogo: {
    height: 350,
    width: 350,
    resizeMode: 'contain',
    opacity: 0.2,
    left: 70,
  },
  contentContainer: {
    padding: 10,
  },
  welcomeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  largeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 42,
  },
  normalText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default Landing;
