import PropTypes from "prop-types";
import React from "react";
function Button({ children, primary, secondary, success, warning, danger }) {
  return <button>{children}</button>;
}

Button.propTypes = {
  chackVariationValue: ({ primary, secondary, success, warning, danger }) => {
    //true olan durumların sayısını verir : birden fazla aynı stil için özlellik eklenmemesi için
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary,success,warning,danger can be true"
      );
    }
  },
};

export default Button;
