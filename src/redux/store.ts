import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

interface Product {
  id: number;
  title: string;
  price: number;
}

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [] as Product[],
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      return [...state, action.payload];
    },
    removeFromWishlist: (state, action: PayloadAction<Product>) => {
      return state.filter(product => product.id !== action.payload.id);
    },
  },
});

const rootReducer = combineReducers({
  wishlist: wishlistSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignorar estas acciones específicas de redux-persist
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export const persistor = persistStore(store);
export default store;