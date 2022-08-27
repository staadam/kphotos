export interface IContactFormValues {
  name: string;
  email: string;
  text: string;
}

export const initialValues: IContactFormValues = {
  name: '',
  email: '',
  text: '',
};
