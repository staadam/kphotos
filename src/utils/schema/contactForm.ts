import { object, string } from 'yup';

export const contactFormSchema = object({
  name: string().required(),
  email: string().email().required(),
  text: string().required(),
});
