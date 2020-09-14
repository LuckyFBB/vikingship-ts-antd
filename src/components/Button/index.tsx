import React from "react";
import classnames from "classnames";
export enum ButtonSize {
  Large = "lg",
  Middle = "md",
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

type NativeButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLElement>;

type AnchorButtonProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLElement>;

export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    btnType,
    size,
    disanled,
    className,
    children,
    href,
    ...restProps
  } = props;

  //btn btn-lg -btn-primary
  const classes = classnames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disanled,
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disanled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disanled: false,
  btnType: ButtonType.Default,
  size: ButtonSize.Middle,
};

export default Button;
