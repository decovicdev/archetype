import classNames from "utils/classnames";

const VStack = ({ className, ...rest }) => {
  return (
    <div
      className={classNames("flex flex-col items-start", className)}
      {...rest}
    />
  );
};

export default VStack;
