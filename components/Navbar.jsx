import Link from 'next/link';
import { MDBBtn } from 'mdb-react-ui-kit';

const Navbar = () => {
  return (
    <nav className="navbar container">
      <Link href="/">
        <a className="navbar-brand">Superhero Identity</a>
      </Link>
      <Link href="/add">
        <MDBBtn>Create Identity</MDBBtn>
      </Link>
    </nav>
  );
};

export default Navbar;
