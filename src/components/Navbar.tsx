import { navLinks } from '../constants';

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Apple Logo" />

        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button>
            <img src={`${import.meta.env.BASE_URL}search.svg`} alt="Search" />
          </button>
          <button>
            <img src={`${import.meta.env.BASE_URL}cart.svg`} alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
