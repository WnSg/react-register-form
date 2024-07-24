import React from 'react';
import { Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

const ErrorText = styled.div`
  color: red;
  margin-top: 5px;
`;

const ContactInfo = () => (
  <div>
    <h3>Información de Contacto</h3>
    <div>
      <label>Email:</label>
      <Field type="email" name="email" />
      <ErrorMessage name="email" component={ErrorText} />
    </div>
    <div>
      <label>Teléfono:</label>
      <Field type="tel" name="phone" />
      <ErrorMessage name="phone" component={ErrorText} />
    </div>
  </div>
);


/*
const ContactInfo = ({ data, handleChange }) => {
  const { email, phone } = data;

  return (
    <div>
      <h2>Información de Contacto</h2>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={handleChange} />
      </label>
      <label>
        Teléfono:
        <input type="tel" name="phone" value={phone} onChange={handleChange} />
      </label>
    </div>
  );
};
*/

export default ContactInfo;