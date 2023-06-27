// import { createStore, applyMiddleware, compose } from 'redux'
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

import thunk from 'redux-thunk';

import TaskReducer from './reducers'
import rootSaga from './saga'



const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, TaskReducer)

const sagaMiddleware = createSagaMiddleware()

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware, thunk]
})

// const store = createStore(
//   TaskReducer,
//   composeEnhancers(applyMiddleware(sagaMiddleware))
// )
sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

// console.log('store:', store.getState())

export default store;