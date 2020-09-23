import React, { useState } from "react";
import classnames from "classnames";
import Icon from "../Icon";
import Transition from "../Transition";

type AlertType = "success" | "default" | "danger" | "warning";

interface BaseAlertProps {
  closable?: boolean;
  desc?: string;
  title: string;
  type?: AlertType;
  className?: string;
  onClose?: () => void;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const [hide, setHide] = useState(false);

  const { closable, desc, title, type, className, onClose } = props;

  const classes = classnames("alert", className, {
    [`alert-${type}`]: type,
  });

  const titleClass = classnames("alert-title", {
    "alert-title-bold": desc,
  });

  const handleClose = (e: React.MouseEvent) => {
    if (onClose) {
      onClose();
    }
    setHide(true);
  };

  return (
    <Transition
      in={!hide}
      classNames="zoom-in-left"
      timeout={300}
      unmountOnExit
    >
      <div className={classes}>
        {closable ? (
          <div className="alert-close" onClick={handleClose}>
            <Icon icon="times" />
          </div>
        ) : null}
        <span className={titleClass}>{title}</span>
        {desc && <p className="alert-desc">{desc}</p>}
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  closable: true,
  type: "default",
};

export default Alert;
