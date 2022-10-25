import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  mesajeDeBienvenida: 'Hola',
  contador: 0,
};

export const saludar = createSlice({
  name: 'saludar',
  initialState,
  reducers: {
    contadorSaludos: (state, { payload }) => {
      const { increment } = payload;
      const { contador } = state;
      state.contador = contador + increment;
    },
  },
});

export const { contadorSaludos } = saludar.actions;
