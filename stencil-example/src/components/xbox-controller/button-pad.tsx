import { FunctionalComponent, h, Fragment } from '@stencil/core';
import Button from './button';

interface ButtonPadProp {
  x: number;
  y: number;
  topPressed?: boolean;
  bottomPressed?: boolean;
  leftPressed?: boolean;
  rightPressed?: boolean;
  // name: string;
}

const ButtonPad: FunctionalComponent<ButtonPadProp> = ({
  x,
  y,
  topPressed,
  bottomPressed,
  leftPressed,
  rightPressed
}) => (
  <Fragment>
    <Button
      radius={4}
      x={x}
      y={y - 10}
      pressed={topPressed}
      color="#f8b711"
    />
    <Button
      radius={4}
      x={x}
      y={y + 10}
      pressed={bottomPressed}
      color="#82b044"
    />
    <Button
      radius={4}
      x={x - 10}
      y={y}
      pressed={leftPressed}
      color="#3185c3"
    />
    <Button
      radius={4}
      x={x + 10}
      y={y}
      pressed={rightPressed}
      color="#d22828"
    />
  </Fragment>
);

export default ButtonPad;