import { configureStore } from '@reduxjs/toolkit';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MyComponente } from '../../src/components/MyComponents';
import { saludar, initialState } from '../../src/redux/slices/saludar';

// se crea el mismo store que el global, pero solo utilizando los reducer que ocupa el componente que se esta testeando
let store = {}

describe('prueba del componente <MyComponente />', () => {
  //establecemos el store antes de cada test, esto para que el State del slice se recetee a su estado inicial antes de cada test
  beforeEach(() => {
    store = configureStore({
      reducer: {
        saludar: saludar.reducer,
      },
    })
  })

// montamos el componente nuevo antes de cada test
  beforeEach(() => {
    render(
      <Provider store={store}>
        <MyComponente />
      </Provider>
    );
  });

  test('prueba del btn, debe de rendirizar el texto', () => {

    const textContadorMock = 'Hola 2';

    const btn = screen.getByTestId('btn');
    fireEvent.click(btn);

    const textContador = screen.getByTestId('contador').innerHTML;

    expect(textContador).toBe(textContadorMock);
  });

  test('prueba del btn, debe de rendirizar el textovgfdgS', () => {





    
    const textContadorMock = 'Hola 2';

    const btn = screen.getByTestId('btn');
    fireEvent.click(btn);

    const textContador = screen.getByTestId('contador').innerHTML;

    expect(textContador).toBe(textContadorMock);
  });

});
