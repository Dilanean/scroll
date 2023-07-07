/**
 * Questo componente è responsabil della gestione dell'icona di scroll immediato al top della pagina.
 */

import React from "react";
import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

const Scroll = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>{showTopBtn && <FaAngleUp className="icon" onClick={goToTop} />}</div>
  );
};

export default Scroll;
