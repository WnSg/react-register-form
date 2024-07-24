/*
import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import TrainingPreferences from './TrainingPreferences';
*/

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import axios from 'axios';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import TrainingPreferences from './TrainingPreferences';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: auto;
`;

const Title = styled.h2`
  color: #333;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;

const RegistrationForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    trainingType: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('Campo Requerido'),
    lastName: Yup.string().required('Campo Requerido'),
    age: Yup.number().required('Campo Requerido').positive('Debe ser positivo').integer('Debe ser entero'),
    email: Yup.string().email('Email inválido').required('Requerido'),
    phone: Yup.string().required('Campo Requerido'),
    trainingType: Yup.string().required('Campo Requerido')
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('https://ip-nombredominio.com/api/register', values);
      console.log('Response:', response.data);
      setSubmitting(false);
      resetForm();
      alert('Registro exitoso!');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitting(false);
      alert('Error en el registro, intente nuevamente.');
    }
  };

  return (
    <Container>
      <Title>Registro en FitLife</Title>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <Form>
            <PersonalInfo />
            <ContactInfo />
            <TrainingPreferences />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Registrando...' : 'Registrarse'}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};


export default RegistrationForm;



/*
const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    trainingType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Aquí nviaría la data al servidor.
  };

  return (
    <form onSubmit={handleSubmit}>
      <PersonalInfo data={formData} handleChange={handleChange} />
      <ContactInfo data={formData} handleChange={handleChange} />
      <TrainingPreferences data={formData} handleChange={handleChange} />
      <button type="submit">Registrarse</button>
    </form>
  );
};


export default RegistrationForm;
*/