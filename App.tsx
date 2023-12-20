import React from 'react';
import {PaperProvider} from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';

function App(): React.JSX.Element {

  return (
    <PaperProvider>
      <AppNavigator />
    </PaperProvider>
  );
}

export default App;
