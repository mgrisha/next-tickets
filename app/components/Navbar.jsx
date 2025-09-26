import Link from "next/link";
import LogoutButton from "./LogoutButton";

const Navbar = ({ user }) => {
  return (
    <nav>
      <h1>Admin helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets" className="mr-auto">
        Tickets
      </Link>
      {user && <span>Hello, {user.email}</span>}
      <LogoutButton />
    </nav>
  );
};

export default Navbar;
