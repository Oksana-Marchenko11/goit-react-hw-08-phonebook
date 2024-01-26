import css from './login.module.css';
import { logIn } from '../redux/auth/operations';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useDispatch } from 'react-redux';

export const Login = () => {
  const navigate = useNavigate;
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
    if (isLoggedIn) {
      navigate('/contacts');
    }
  };
  return (
    <form className={css.loginForm} onSubmit={handleSubmit}>
      <label htmlFor="email">email</label>
      <input name="email" id="email" type="text" />
      <label htmlFor="password">password</label>
      <input name="password" id="password" type="text" />
      <button type="Submit">Submit</button>
    </form>
  );
};
