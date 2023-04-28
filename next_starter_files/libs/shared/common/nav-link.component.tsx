import Link from "next/link";

type NavLinkPropsType = {
  href: string;
  as: string;
  children: React.ReactNode;
}

const NavLink = ({ href, as, children }: NavLinkPropsType) => {

  return (
    <Link href={href} as={as} passHref>
      {children}
    </Link>
  );
};

export default NavLink;
