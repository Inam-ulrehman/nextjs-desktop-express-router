import { configureStore } from '@reduxjs/toolkit'
import modalsSlice from './features/modals/modalsSlice'

const store = configureStore({
  reducer: {
    modals: modalsSlice,
  },
})

export default store
