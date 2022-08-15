import { contactFormSchema } from '../schema/contactForm';
import { IContactFormInit } from '../constants/contactForm/initialValues';

interface IErrors {
  name?: string;
  email?: string;
  text?: string;
}

type IValidateContactForm = (values: IContactFormInit) => Promise<IErrors>;

export const validateContactForm: IValidateContactForm = async (values: any) => {
  let errors = {};

  try {
    await contactFormSchema.validate(values, { abortEarly: false });
  } catch (e: any) {
    errors = e.inner.reduce((acc: any, error: any) => {
      if (error.path) acc[error.path] = 'This field is required';
      return acc;
    }, {});
  }

  return errors;
};
