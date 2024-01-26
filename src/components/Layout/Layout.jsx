import css from './Layout.module.css';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <p> це логотип</p>
        <p> My PhoneBook </p>
      </header>
      <Outlet />
      <footer>
        <p className={css.header}>А це футер</p>
      </footer>
    </div>
  );
};
