import { forwardRef } from "react";
import classNames from "utils/classnames";

const LargeHeading = ({ className, ...rest }) => {
  return (
    <h1
      className={classNames(
        "text-4xl md:text-6xl lg:text-7xl xl:text-8xl",
        className
      )}
      {...rest}
    />
  );
};

const Heading = ({ className, ...rest }) => {
  return (
    <h2
      className={classNames("text-2xl md:text-3xl lg:text-5xl", className)}
      {...rest}
    />
  );
};

const SubHeading = ({ className, ...rest }) => {
  return (
    <h3
      className={classNames("text-base md:text-2xl lg:text-3xl", className)}
      {...rest}
    />
  );
};

const Body = forwardRef(({ className, ...rest }, ref) => {
  return (
    <p
      ref={ref}
      className={classNames(
        "text-xs md:text-base lg:text-xl font-light",
        className
      )}
      {...rest}
    />
  );
});

const SubTitle = ({ className, ...rest }) => {
  return (
    <Body
      className={classNames("font-extralight uppercase", className)}
      {...rest}
    />
  );
};

const ButtonText = ({ className, ...rest }) => {
  return <Body className={classNames("font-normal", className)} {...rest} />;
};

const MenuText = ({ className, ...rest }) => {
  return (
    <p
      className={classNames("text-4xl md:text-6xl lg:text-base", className)}
      {...rest}
    />
  );
};

export {
  LargeHeading,
  Heading,
  SubHeading,
  Body,
  SubTitle,
  ButtonText,
  MenuText,
};
