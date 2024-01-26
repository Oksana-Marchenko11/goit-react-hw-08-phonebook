import css from './register.module.css';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';

export const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSelectUser = useSelector(selectUser);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        password: form.elements.password.value,
        email: form.elements.email.value,
      })
    );
    if (isSelectUser) {
      navigate('/contacts');
    }
    form.reset();
  };
  return (
    <form className={css.registerForm} onSubmit={handleSubmit}>
      <label htmlFor="name">name</label>
      <input name="name" id="name" type="text" />
      <label htmlFor="password">password</label>
      <input name="password" id="password" type="text" />
      <label htmlFor="email">email</label>
      <input name="email" id="email" type="text" />
      <button type="Submit">Submit</button>
    </form>
  );
};
