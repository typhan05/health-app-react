import { ButtonHTMLAttributes, DOMAttributes, memo, ReactNode } from "react";
import BaseButton from "./base/BaseButton";

type Props = {
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  action?: DOMAttributes<HTMLButtonElement>;
  children?: ReactNode;
};

const PrimaryButton = memo<Props>(({ props, action, children }) => {
  return (
    <BaseButton
      props={props}
      action={action}
      className="c-button c-button--primary"
    >
      {children}
    </BaseButton>
  );
});

export default PrimaryButton;
