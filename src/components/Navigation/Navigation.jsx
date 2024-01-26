import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          <navigate to="/contacts">Contacts</navigate>
        </li>
      </ul>
    </nav>
  );
};
