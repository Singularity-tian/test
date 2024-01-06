import Link from "next/link";

const links = [
  //   { href: "/", label: "Home" },
  //   { href: "/about", label: "About" },
  { href: "/tasks", label: "Tasks" },
  { href: "/client", label: "Client" },
  { href: "/query", label: "Query" },
  { href: "/drinks", label: "Drinks" },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl max-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href} className="captalize">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
