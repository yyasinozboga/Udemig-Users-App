import React from 'react';
import Routes from './src/routes/Routes';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Routes />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
