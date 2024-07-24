/*import React, { useState } from 'react';*/
import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';


const ErrorText = styled.div
`color: red;
  margin-top: 5px;`;

const PersonalInfo = () => (
  <div>
    <h3>Datos Personales</h3>
    <div>
      <label>Nombre:</label>
      <Field type="text" name="firstName" />
      <ErrorMessage name="firstName" component={ErrorText} />
    </div>
    <div>
      <label>Apellido:</label>
      <Field type="text" name="lastName" />
      <ErrorMessage name="lastName" component={ErrorText} />
    </div>
    <div>
      <label>Edad:</label>
      <Field type="number" name="age" />
      <ErrorMessage name="age" component={ErrorText} />
    </div>
  </div>
);


/*
const PersonalInfo = ({ data, handleChange }) => {
  const { firstName, lastName, age } = data;

  return (
    <div>
      <h2>Datos Personales</h2>
      <label>
        Nombre:
        <input type="text" name="firstName" value={firstName} onChange={handleChange} />
      </label>
      <label>
        Apellido:
        <input type="text" name="lastName" value={lastName} onChange={handleChange} />
      </label>
      <label>
        Edad:
        <input type="number" name="age" value={age} onChange={handleChange} />
      </label>
    </div>
  );
};
*/


export default PersonalInfo;