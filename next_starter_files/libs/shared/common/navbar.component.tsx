import React from "react";

import NavLink from "./nav-link.component";
import Link from "next/link.js";

const Navbar = () => {

    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link className="navbar-brand" href="/" as="/">
                    <span>conduit</span>
                </Link>
                <ul className="nav navbar-nav pull-xs-right">
                    <li className="nav-item">
                        <NavLink href="/" as="/">
                            <span>Home</span>
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink href="/user/login" as="/user/login">
                            Sign in
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink href="/user/register" as="/user/register">
                            Sign up
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
