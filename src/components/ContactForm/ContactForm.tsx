import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';

import { initialValues } from '../../utils/constants/contactForm/initialValues';
import { validateContactForm } from '../../utils/validation/validateContactForm';
import { TextField } from '../TextField/TextField';

export const ContactForm = () => {
  const onSubmit = (values: any) => {
    axios.post('/.netlify/functions/test', values).then(({ data }) => {});
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate: validateContactForm,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id='name'
        name='name'
        type='text'
        label={'Imię i nazwisko'}
        onChange={formik.handleChange}
        value={formik.values.name}
        onBlur={formik.handleBlur}
        isInvalid={!!(formik.errors.name && formik.touched.name)}
      />
      <TextField
        id='email'
        name='email'
        type='email'
        label={'Twój email'}
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        isInvalid={!!(formik.errors.email && formik.touched.email)}
      />
      <TextField
        id='text'
        name='text'
        label='Twoja wiadomość'
        onChange={formik.handleChange}
        value={formik.values.text}
        onBlur={formik.handleBlur}
        isInvalid={!!(formik.errors.text && formik.touched.text)}
        isTextarea
      />
      <button type='submit'> send message</button>
    </form>
  );
};
