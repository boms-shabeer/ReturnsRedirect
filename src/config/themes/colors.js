import {DefaultTheme} from 'react-native-paper';

export const lightTheme = {
  ...DefaultTheme,
  myOwnProperty: true,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    test:"red",
    primary: '#15A58A',
    secondary: '#FFFFF',
    tertiary: '#E30613',
    Bglight: '#F9F8F8',
    OffrClr: '#44961D',
    txtplholder: '#7C7C7C',
    brwnTxt: '#717171',
    phnnmbr: '#20961D',
  },
};

export const darkTheme = {
  ...DefaultTheme,
  dark: false,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    primary: '#FFFFFF',
    secondary: '#131313',
    tertiary: '#E30613',
    Bglight: '#131313',
    OffrClr: '#44961D',
    txtplholder: '#7C7C7C',
    brwnTxt: '#717171',
    phnnmbr: '#20961D',
  },
};
