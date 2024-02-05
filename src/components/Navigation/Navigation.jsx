import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Navigation = () => {
  const isLoggendIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      {isLoggendIn ? (
        <NavLink to="/contacts">Contacts</NavLink>
      ) : (
        <>
          <NavLink to="/register">Registrate</NavLink>
          <NavLink to="/login">LogIn</NavLink>
        </>
      )}
    </div>
  );
};
