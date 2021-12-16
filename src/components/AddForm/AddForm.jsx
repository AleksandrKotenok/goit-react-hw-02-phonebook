import PropTypes from 'prop-types';
import s from '../AddForm/AddForm.module.css';

export const AddForm = ({ input, submit, value }) => {
  return (
    <section className={s.addForm}>
      <form className={s.form}>
        <label className={s.label}>Name:</label>
        <input
          className={s.input}
          type="text"
          name="name"
          value={value.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={input}
        />
      </form>
      <form className={s.form}>
        <label className={s.label}>Tel:</label>
        <input
          className={s.input}
          type="tel"
          name="number"
          value={value.number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={input}
        />
      </form>
      <button className={s.button} type="submit" onClick={submit}>
        Add contact
      </button>
    </section>
  );
};

AddForm.propTypes = {
  input: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
};
