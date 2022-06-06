import classNames from "utils/classnames";
import { ButtonText } from "../typography";

const ButtonOutline = ({ className, children, size = "m", ...rest }) => {
  const small = size === "s";

  return (
    <button
      className={classNames(
        `rounded-lg h-max border-2 border-white hover:border-primary hover:bg-primary transition
        ${small ? "px-4 py-[6px]" : " px-8 py-[6px]"}
        `,
        className
      )}
      {...rest}
    >
      {small ? (
        <p className="text-base">{children}</p>
      ) : (
        <ButtonText>{children}</ButtonText>
      )}
    </button>
  );
};

export default ButtonOutline;
