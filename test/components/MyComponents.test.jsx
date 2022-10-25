import { configureStore } from '@reduxjs/toolkit';
import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MyComponente } from '../../src/components/MyComponents';
import { saludar } from '../../src/redux/slices/saludar';

// se crea el mismo store que el global, pero solo utilizando los reducer que ocupa el componente que se esta testeando
const store = configureStore({
  reducer: {
    saludar: saludar.reducer,
  },
});

describe('prueba del componente <MyComponente />', () => {
  afterEach(cleanup);

  // beforeEach(() => {
  //   render(
  //     <Provider store={store}>
  //       <MyComponente />
  //     </Provider>
  //   );
  // });

  test('prueba del btn, debe de rendirizar el texto', () => {
    render(
      <Provider store={store}>
        <MyComponente />
      </Provider>
    );
    const textContadorMock = 'Hola 2';

    const btn = screen.getByTestId('btn');
    fireEvent.click(btn);

    const textContador = screen.getByTestId('contador').innerHTML;

    expect(textContador).toBe(textContadorMock);
  });
});
