import * as React from "react";
import { Link } from "react-scroll";

export interface IAppProps {}

export const Header: React.FC = (props: IAppProps) => {
  return (
    <div>
      <header id="js-header">
        <div className="container clearfix">
          <h1 id="logo">Praveen</h1>
          <nav>
            <Link
              activeClass="active"
              className="menu-link"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass="active"
              className="menu-link"
              to="works"
              spy={true}
              smooth={true}
              duration={500}
            >
              Works
            </Link>
            <Link
              activeClass="active"
              className="menu-link"
              to="resume"
              spy={true}
              smooth={true}
              duration={500}
            >
              Resume
            </Link>
            <Link
              activeClass="active"
              className="menu-link"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
};