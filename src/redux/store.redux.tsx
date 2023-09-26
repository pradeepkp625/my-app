import { createStore, applyMiddleware, compose } from 'redux'; // Update import for compose

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducers } from './reducers';
import thunk from 'redux-thunk';

// ...

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

// Use compose to combine enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the store with combined enhancers
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Create the persisted store
const persistor = persistStore(store);

export { store, persistor };
