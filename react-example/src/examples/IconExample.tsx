import React from "react";
import { Icon } from "@frc-web-components/react";

/**
 * SVG icons from https://fonts.google.com/icons
 */
const starIcon = {
  svgPath:
    "m265.925-125.58 56.807-243.572-189.036-163.462 249.074-21.615L480-783.689l97.422 229.46 248.882 21.615-189.043 163.462 56.981 243.572-214.158-129.348L265.925-125.58Z",
  viewBox: "0 -960 960 960",
};

const terminalIcon = {
  svgPath:
    "M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z",
  viewBox: "0 -960 960 960",
};

const IconExample: React.FC = () => {
  return (
    <div>
      <Icon color="red" icon="check" />
      <Icon icon="" color="green" {...starIcon} />
      <Icon
        style={{ width: "40px", height: "40px" }}
        icon=""
        color="gray"
        {...terminalIcon}
      />
    </div>
  );
};

export default IconExample;
