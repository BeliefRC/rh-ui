import React, {
  FC,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";
import classNames from "classnames";

export type ButtonSize = "lg" | "sm";
export type ButtonType = "primary" | "default" | "danger" | "link";

interface BaseButtonProps {
  /**设置 Button 的className */
  className?: string;
  /**
   * 设置 Button 的类型
   * @default default
   */
  btnType: ButtonType;
  /**
   * 设置 Button 的禁用状态
   * @default false
   */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  children?: ReactNode;
  /**设置 Link类型Button 的超链接 */
  href?: string;
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
// 全部设为可选参数
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

/**
 *  Button组件
 * @param props
 * @constructor
 */
export const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props;

  const classes = classNames("btn", className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === "link" && disabled,
  });
  if (btnType === "link" && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: "default",
};
export default Button;
