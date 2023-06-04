import { useDispatch } from 'react-redux';
import { fetchContacts, addContact } from 'redux/operations';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { Form, Field, Input, SubmitButton } from './ContactForm.styled';

const checkContactName = (name, contacts) =>
  contacts.some(el => el.name === name);
export const ContactForm = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(selectContacts);
  const handleSubmit = evt => {
    evt.preventDefault();
    const data = evt.currentTarget.elements;
    if (checkContactName(data.name.value, items)) {
      alert(`${data.name.value} is alredy in contacts`);
    } else {
      dispatch(
        addContact({
          name: data.name.value,
          phone: data.number.value,
        })
      );
      dispatch(fetchContacts());
    }

    evt.currentTarget.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Field>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Field>
      <Field>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Field>
      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
};
