import React from 'react';
import axios from 'axios';
import { Field, Formik } from 'formik';
import ReCAPTCHA from 'react-google-recaptcha';

import { IContactFormValues, initialValues } from '../../../utils/constants/contactForm/initialValues';
import { validateContactForm } from '../../../utils/validation/validateContactForm';
import { TextField } from '../TextField/TextField';
import { FormWrapper, ReCAPTCHAPolicy } from './ContactForm.styled';
import { StyledButton } from '../../elements/buttons/StyledButton/StyledButton';
import { useAlert } from '../../../utils/hooks/useAlert/useAlert';

export const ContactForm = () => {
  const reRef = React.useRef<ReCAPTCHA>();
  const { dispatchAlerts } = useAlert();

  const onSubmit = async (values: IContactFormValues, { resetForm }: { resetForm: () => void }) => {
    if (!reRef.current) return;
    try {
      const token = await reRef.current.executeAsync();
      reRef.current.reset();
      await axios.post('/.netlify/functions/sendMail', { token, ...values });
      dispatchAlerts('Message send.');
    } catch (e) {
      dispatchAlerts('Something went wrong please try again later.');
    } finally {
      resetForm();
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validateContactForm}>
      {(props) => (
        <FormWrapper onSubmit={props.handleSubmit}>
          <Field
            id='name'
            name='name'
            type='text'
            component={TextField}
            label={'Imię i nazwisko'}
            onChange={props.handleChange}
            value={props.values.name}
            onBlur={props.handleBlur}
            isInvalid={!!(props.errors.name && props.touched.name)}
          />
          <Field
            id='email'
            name='email'
            type='text'
            label={'Twój email'}
            component={TextField}
            onChange={props.handleChange}
            value={props.values.email}
            onBlur={props.handleBlur}
            isInvalid={!!(props.errors.email && props.touched.email)}
          />
          <Field
            id='text'
            name='text'
            label='Twoja wiadomość'
            onChange={props.handleChange}
            component={TextField}
            value={props.values.text}
            onBlur={props.handleBlur}
            isInvalid={!!(props.errors.text && props.touched.text)}
            isTextarea
          />
          <StyledButton type='submit'>Wyślij wiadomość</StyledButton>
          <ReCAPTCHAPolicy>
            This site is protected by reCAPTCHA and the Google{' '}
            <a href='https://policies.google.com/privacy'>Privacy Policy</a> and{' '}
            <a href='https://policies.google.com/terms'>Terms of Service</a> apply.
            <ReCAPTCHA
              sitekey={process.env.GATSBY_RECAPTCHA_PUBLIC_KEY as string}
              size='invisible'
              ref={reRef as React.LegacyRef<ReCAPTCHA>}
            />
          </ReCAPTCHAPolicy>
        </FormWrapper>
      )}
    </Formik>
  );
};
