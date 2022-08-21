import { FunctionalComponent, h } from '@stencil/core';

interface ButtonProps {
  x: number;
  y: number;
  radius: number;
  pressed?: boolean;
  color?: string;
  strokeWidth?: number;
}

const Button: FunctionalComponent<ButtonProps> = ({
  x,
  y,
  radius,
  pressed,
  color = 'black',
  strokeWidth = 1,
}) => {
  return (
    <svg>
      <circle cx={x + 6} cy={y + 50} r={radius} stroke={color} stroke-width={strokeWidth} fill={pressed ? color : 'none'} />
    </svg>
  )
};

export default Button;