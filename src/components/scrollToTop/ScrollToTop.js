import React, { useEffect, useState } from "react";
import "./scrollToTop.scss";

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
          <i class="fas fa-arrow-alt-circle-up" title="scroll to top"></i>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
