import React, { useRef } from "react";
import logo from "../assets/logo.png";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  const targetElementRef = useRef(null);
  const navigateToElement = () => {
    const targetElement = document.getElementById("yourElementId");

    if (targetElement) {
      // Scroll to the target element or perform any other action
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex items-center shadow-lg border-b-2 border-orange-300 selection:">
      <div className="lg:ml-5 md:ml-5 mt-2">
        <img src={logo} alt="logo" width={100} height={100} />
      </div>
      <div className="text-center mx-auto">
        <p className="hidden text-4xl md:block font-sans">
          Lyon Institute for Geostrategy & Multicultural Relations
        </p>
        <p
          style={{ marginLeft: "-8rem" }}
          className="text-4xl -mx-10 md:hidden font-sans"
        >
          LIGMR
        </p>
      </div>
    </div>
  );
};

export default Header;
