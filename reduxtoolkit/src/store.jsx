import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({

  reducer: rootReducer,
  // Optional: Add middleware or enhancers here

});
export default store;
