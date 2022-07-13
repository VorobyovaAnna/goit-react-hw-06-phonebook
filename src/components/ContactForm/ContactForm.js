import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Label, ErrorText } from './ContactForm.styled';
import { useContacts } from 'hooks/useContacts';


const schema = yup.object().shape({
  name: yup.string()
    .matches(/(^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$)/,
      { message: "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan" })
    .required(),
  
  number: yup.string()
    .matches(/(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/,
      { message: "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +" })
    .required(),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const { addContact } = useContacts();
  const handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
    addContact(name, number);
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}>
      <Form>
        <Label>
          Name
          <Field name="name" type="text" />
          <FormError name="name" />
        </Label>
        <Label>
          Number
          <Field name="number" type="tel" />
          <FormError name="number" />
        </Label>

        <button type="submit">Add contact</button>

      </Form>
    </Formik>
  );
};

export default ContactForm;
