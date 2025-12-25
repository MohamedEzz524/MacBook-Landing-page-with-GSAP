import logo from '../../public/logo.svg';
import search from '../../public/search.svg';
import cart from '../../public/cart.svg';
import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="Apple Logo" />

        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src={search} alt="Search" />
          </button>
          <button>
            <img src={cart} alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
