export interface IContactFormInit {
  name: string;
  email: string;
  text: string;
}

export const initialValues: IContactFormInit = {
  name: '',
  email: '',
  text: '',
};
