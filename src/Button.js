import PropTypes from "prop-types";
import React from "react";
function Button({ children, primary, secondary, success, warning, danger }) {
  return (
    <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">
      {children}
    </button>
  );
}

Button.prototype = {
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
