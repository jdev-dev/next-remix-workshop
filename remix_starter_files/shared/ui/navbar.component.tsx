import { useMatches } from "@remix-run/react";
import type { ReactElement } from "react";

export default function Navbar() : ReactElement {
  const matches = useMatches();

  return (
    <nav className="navbar navbar-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span>conduit</span>
        </a>
        <ul className="nav navbar-nav pull-xs-right">
          <li className="nav-item">
            <a href="/" className="nav-link ">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/login"
              className={
                matches.some((p) => p.pathname.includes("/login"))
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              {" "}
              Sign in
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/register"
              className={
                matches.some((p) => p.pathname.includes("/register"))
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Sign up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}