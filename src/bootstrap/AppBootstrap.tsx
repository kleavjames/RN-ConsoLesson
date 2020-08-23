import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers';
import { RootStackNavigation } from '../navigation';

const store = () => {
  const reduxDevToolsEnhancer = (window as any)
    .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = __DEV__
    ? reduxDevToolsEnhancer
      ? reduxDevToolsEnhancer({
          shouldHotReload: false,
        })
      : compose
    : compose;

  const enhancer = composeEnhancers(applyMiddleware(thunk));

  return createStore(rootReducer, enhancer);
};

const AppBootstrap: React.FC<{}> = () => (
  <Provider store={store()}>
    <RootStackNavigation />
  </Provider>
);

export default AppBootstrap;
