import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import ToDo from './src/Screens/ToDo/ToDo';

import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  StyleSheet,
} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ToDo />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05b5ba',
    paddingHorizontal: 15,
    position: 'relative',
  },
});
