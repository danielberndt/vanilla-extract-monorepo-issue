import {dsStyles} from "./dsStyles.css";

export const Box = (props) => {
  const classNames = [props.className];
  for (const prop in props) {
    classNames.push(dsStyles[prop] && dsStyles[prop][props[prop]]);
  }
  return <div {...props} className={classNames.filter(Boolean).join(" ")} />;
};
