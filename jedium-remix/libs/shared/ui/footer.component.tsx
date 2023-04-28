import type { ReactElement } from "react";

export default function Footer() : ReactElement {
    return (
        <footer className="container fixed" >
            <div className="absolute bottom-0">
                <a href="/" className="logo-font">
                    conduit
                </a>
                <span className="attribution">
                    <a href="https://www.grupoesoft.com/">JDev conduit demo {" "}</a>. Design
                    licensed under MIT.
                </span>
            </div>
        </footer>
    );
}
