import { Link } from 'react-router-dom';
import css from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={css.notfound}>
      <h2>Page not found</h2>
      <p>
        Return to <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
