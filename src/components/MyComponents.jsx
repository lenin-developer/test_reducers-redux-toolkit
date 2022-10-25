import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contadorSaludos } from '../redux/slices/saludar';

export const MyComponente = () => {
  const { mesajeDeBienvenida, contador } = useSelector(
    (store) => store.saludar
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    const payload = {
      increment: 2,
    };
    dispatch(contadorSaludos(payload));
  };

  return (
    <>
      <p data-testid="contador">{`${mesajeDeBienvenida} ${contador}`}</p>
      <button data-testid="btn" onClick={handleClick}>
        Saludar
      </button>
    </>
  );
};
