import { FunctionalComponent, h, Fragment } from '@stencil/core';

interface JoystickProps {
  x: number;
  y: number;
  xAxis: number;
  yAxis: number;
}

const Joystick: FunctionalComponent<JoystickProps> = ({
  x,
  y,
  xAxis,
  yAxis,
}) => {
  const fillOpacity = Math.sqrt(Math.pow(xAxis, 2) + Math.pow(yAxis, 2));
  return (
    <Fragment>
      <svg>
        <circle cx={x + 6} cy={y + 50} r="12.5" stroke="#aaa" stroke-width="1" fill="none" />
        <circle cx={x + 6 + 4 * xAxis} cy={y + 50 - 4 * yAxis} r="9" stroke="black" stroke-width="1" fill={`rgba(0,0,0,${fillOpacity})`} />
      </svg>
    </Fragment>
  )
};

export default Joystick;