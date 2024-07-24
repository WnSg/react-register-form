import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const ErrorText = styled.div`
  color: red;
  margin-top: 5px;
`;

const TrainingPreferences = () => (
  <div>
    <h3>Preferencias de Entrenamiento</h3>
    <div>
      <label>Tipo de Entrenamiento:</label>
      <Field as="select" name="trainingType">
        <option value="">Seleccione una opción</option>
        <option value="cardio">Cardio</option>
        <option value="strength">Fuerza</option>
        <option value="flexibility">Flexibilidad</option>
      </Field>
      <ErrorMessage name="trainingType" component={ErrorText} />
    </div>
  </div>
);

/*

const TrainingPreferences = ({ data, handleChange }) => {
  const { trainingType } = data;

  return (
    <div>
      <h2>Preferencias de Entrenamiento</h2>
      <label>
        Tipo de Entrenamiento:
        <select name="trainingType" value={trainingType} onChange={handleChange}>
          <option value="">Seleccione una opción</option>
          <option value="cardio">Cardio</option>
          <option value="strength">Fuerza</option>
          <option value="flexibility">Flexibilidad</option>
        </select>
      </label>
    </div>
  );
};
*/
export default TrainingPreferences;