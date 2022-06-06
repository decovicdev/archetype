import classNames from "utils/classnames";

const HStack = ({ className, ...rest }) => {
  return <div className={classNames("flex ", className)} {...rest} />;
};

export default HStack;
