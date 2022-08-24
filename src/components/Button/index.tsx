import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import './index.less';

export type ButtonSize = 'lg' | 'default' | 'small';
export type ButtonType = 'primary' | 'default' | 'danger' | 'link';

interface BaseButtonProps {
  className?: string;
  size?: ButtonSize;
  disabled?: boolean;
  btnType?: ButtonType;
  href?: string;
}

export type IButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, btnType, href, className, disabled, size = 'default', ...restProps } = props;
  const cls = cn('btn', className, {
    [`btn-${size}`]: size,
    [`btn-${btnType}`]: btnType,
    disabled: disabled,
  });
  if (btnType === 'link' && href) {
    return (
      <a href={href} className={cls} {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} disabled={disabled} {...restProps}>
      {children}
    </button>
  );
};

export default Button;
