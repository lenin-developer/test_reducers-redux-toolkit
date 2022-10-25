import { saludar, initialState, contadorSaludos } from '../../../src/redux/slices/saludar'


let store = {}

describe('slice saludar', () => {

  //inicializamos el store antes de cada test
  beforeEach(() => {
    store = saludar.reducer(initialState, {})
  });


  it('se comprueba que el estado inicial de slice saludar sea el esperado', () => {
    expect(initialState).toEqual(store)
  });

  it('reducer: contadorSaludos: debe de incrementar el contador en 2',()=>{
    const payloadMokc = {  increment: 2  } 
    const storeMock = {
      mesajeDeBienvenida: 'Hola',
      contador: 2,
    }
    const storeExpect = saludar.reducer(store, contadorSaludos(payloadMokc) )
    expect(storeExpect).toEqual(storeMock)
  })

});