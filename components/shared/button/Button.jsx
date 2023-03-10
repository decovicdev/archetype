import { forwardRef } from "react";
import classNames from "utils/classnames";
import { ButtonText } from "../typography";

const Button = ({ className, children, size = "m", ...rest }, ref) => {
  const small = size === "s";

  return (
    <button
      ref={ref}
      className={classNames(
        ` rounded-lg h-max bg-white text-black hover:bg-secondary transition ${
          small ? "px-4 py-2" : " px-8 py-2"
        }`,
        className
      )}
      {...rest}
    >
      {small ? (
        <p className="text-base whitespace-nowrap">{children}</p>
      ) : (
        <ButtonText>{children}</ButtonText>
      )}
    </button>
  );
};

export default forwardRef(Button);
