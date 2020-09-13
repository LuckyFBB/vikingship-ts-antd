import React from "react";
import classnames from "classnames";
export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps {
  className?: string;
  disanled?: boolean;
  btnType?: ButtonType;
  size?: ButtonSize;
  children: React.ReactNode;
  href?: string;
}

const Button: React.FC<BaseButtonProps> = (props) => {
  const { btnType, size, disanled, className, children, href } = props;

  //btn btn-lg -btn-primary
  const classes = classnames("btn", {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disanled,
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disanled}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disanled: false,
  btnType: ButtonType.Default,
};

export default Button;
