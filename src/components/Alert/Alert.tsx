import React, { FC, useState } from "react";
import classNames from "classnames";

export type AlertType = "success" | "default" | "danger" | "warning";

export interface AlertProps {
  closable?: boolean;
  type?: AlertType;
  description?: React.ReactNode;
  message: React.ReactNode;
  className?: string;
}

const Alert: FC<AlertProps> = (props) => {
  const { closable, type, description, message, className } = props;
  const [isShow, setIsShow] = useState(true);
  const baseClass = "rh-ui-alert";
  const classes = classNames(baseClass, className, {
    [`${baseClass}-${type}`]: type,
  });
  return isShow ? (
    <div className={classes}>
      <span className="rh-ui-alert-message">{message}</span>
      {description ? (
        <span className="rh-ui-alert-description">{description}</span>
      ) : null}
      {closable ? (
        <span
          className="rh-ui-alert-close-icon"
          onClick={() => {
            setIsShow(false);
          }}
        >
          X
        </span>
      ) : null}
    </div>
  ) : null;
};
Alert.defaultProps = {
  closable: false,
  type: "default",
};
export default Alert;
