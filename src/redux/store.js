import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
  version: 1,
};

const rootReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
