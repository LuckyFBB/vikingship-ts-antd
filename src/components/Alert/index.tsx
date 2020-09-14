import React, { useState } from "react";
import classnames from "classnames";

export enum AlertType {
  Success = "success",
  Default = "default",
  Danger = "danger",
  Warning = "warning",
}

interface BaseAlertProps {
  canclose?: boolean;
  desc?: string;
  title: string;
  alertType?: AlertType;
  className?: string;
  onClose?: () => void;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const [hide, setHide] = useState(false);

  const { canclose, desc, title, alertType, className, onClose } = props;

  const classes = classnames("alert", className, {
    [`alert-${alertType}`]: alertType,
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
    <>
      {!hide && (
        <div className={classes}>
          {canclose ? (
            <div className="alert-close" onClick={handleClose}>
              关闭
            </div>
          ) : null}
          <span className={titleClass}>{title}</span>
          {desc && <p className="alert-desc">{desc}</p>}
        </div>
      )}
    </>
  );
};

Alert.defaultProps = {
  canclose: true,
  alertType: AlertType.Default,
};

export default Alert;
