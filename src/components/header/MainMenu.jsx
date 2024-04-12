import { Link } from "react-router-dom";

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const MainMenu = ({ style = "" }) => {
  const { pathname } = useLocation();
  const [isActiveParent, setIsActiveParent] = useState(false);

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        {/* <li
          className={`${isActiveParentChaild(homeItems, pathname) ? "current" : ""
            } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Home</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {homeItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        <li
          className={`${isActiveParentChaild(homeItems, pathname) ? "current" : ""
            } menu-item-has-children`}
        >
          <Link to="/">
            <span className="mr-10">Ana səhifə</span>
          </Link>
        </li>
        {/* End home page menu */}

        <li className={pathname === "/tour-list-v2" ? "current" : ""}>
          <Link to="/tour-list-v2">
            <span className="mr-10">Turlar</span>
          </Link>
        </li>
        <li className={pathname === "/hotel-list-v4" ? "current" : ""}>
          <Link to="/hotel-list-v4">
            <span className="mr-10">Otellər</span>
          </Link>
        </li>

        {/* <li
          className={
            isActiveParent
              ? "menu-item-has-children -has-mega-menu current"
              : "menu-item-has-children -has-mega-menu"
          }
        >
          <a href="#">
            <span className="mr-10">Categories</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega">
            <CategoriesMegaMenu setIsActiveParent={setIsActiveParent} />
          </div>
        </li> */}
        {/* End categories menu items */}

        {/* <li className={pathname === "/destinations" ? "current" : ""}>
          <Link to="/destinations">Destinations</Link>
        </li> */}
        {/* End Destinatinos single menu */}
        <li className={pathname === "/blog-list-v2" ? "current" : ""}>
          <Link to="/blog-list-v2">
            <span className="mr-10">Bloqlar</span>
          </Link>
        </li>
        <li className={pathname === "/about" ? "current" : ""}>
          <Link to="/about">
            <span className="mr-10">Haqqımızda</span>
          </Link>
        </li>
        <li className={pathname === "/vendor-dashboard/dashboard" ? "current" : ""}>
          <Link to="/vendor-dashboard/dashboard">
            <span className="mr-10">Admin</span>
          </Link>
        </li>
        {/* <li
          className={`${isActiveParentChaild(blogItems, pathname) ? "current" : ""
            } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Blog</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {blogItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End blogIems */}

        {/* <li
          className={`${isActiveParentChaild(pageItems, pathname) ? "current" : ""
            } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Pages</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End pages items */}

        {/* <li
          className={`${pathname.split("/")[1] == "dashboard" ||
            pathname.split("/")[1] == "vendor-dashboard"
            ? "current"
            : ""
            } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, pathname) ? "current" : ""
                }
              >
                <Link to={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}

        {/* <li className={pathname === "/contact" ? "current" : ""}>
          <Link to="/contact">Contact</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default MainMenu;
