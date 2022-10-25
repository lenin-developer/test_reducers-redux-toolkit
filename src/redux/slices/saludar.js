import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mesajeDeBienvenida: 'Hola',
  contador: 0,
};

export const saludar = createSlice({
  name: 'saludar',
  initialState,
  reducers: {
    contadorSaludos: (state, { payload }) => {
      const { contador } = state;
      const { increment } = payload;
      state.contador = contador + increment;
    },
  },
});

export const { contadorSaludos } = saludar.actions;
