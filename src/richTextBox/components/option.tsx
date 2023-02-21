import classNames from "classnames";
import "./style.css";

const Option = (props: any) => {
  const { children, className, activeClassName, active, disabled, title } =
    props;

  const onClick = () => {
    const { disabled, onClick, value } = props;
    if (!disabled) {
      onClick(value);
    }
  };

  return (
    <div
      className={classNames("rte-option-wrapper", className, {
        [`rte-option-active ${activeClassName}`]: active,
        "rte-option-disabled": disabled,
      })}
      onClick={onClick}
      aria-selected={active}
      title={title}
    >
      {children}
    </div>
  );
};

export default Option;
