import classNames from "utils/classnames";

const Container = ({ className, ...rest }) => {
  return (
    <div
      className={classNames(
        "max-w-[1600px] mx-auto px-6 md:px-10 lg:px-5",
        className
      )}
      {...rest}
    />
  );
};

export default Container;
