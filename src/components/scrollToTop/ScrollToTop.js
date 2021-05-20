import React, { useEffect, useState } from "react";
import "./scrollToTop.scss";
import upArrow from "../../images/up.svg";
import "animate.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="ScrollToTOp">
      {isVisible && (
        <div onClick={toTop}>
          <img
            className="animate__animated animate__pulse animate__infinite animate__faster"
            src={upArrow}
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
