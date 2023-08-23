import { ButtonHTMLAttributes, DOMAttributes, memo, ReactNode } from "react";

type Props = {
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  action?: DOMAttributes<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

const BaseButton = memo<Props>(
  ({ props, action, disabled, className, children, onClick }) => {
    return (
      <button
        type="button"
        className={className}
        disabled={disabled}
        onClick={onClick}
        {...props}
        {...action}
      >
        {children}
      </button>
    );
  }
);

export default BaseButton;
