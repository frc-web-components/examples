import { FunctionalComponent, h, Fragment } from '@stencil/core';

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
    <svg>
      <circle cx={x + 6} cy={y + 50} r="12.5" stroke="#aaa" stroke-width="1" fill="none" />
    </svg>
    <svg class={`top button ${topPressed ? 'pressed' : ''}`} x={x} y={y - 6} width="12" viewBox="0 0 100 57" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 36.168 14.187 Q 51.202 0.642 65.531 14.187 L 87.15 34.625 Q 101.479 48.17 72.116 48.17 L 27.815 48.17 Q -1.548 48.17 13.486 34.625 Z"
      />
    </svg>

    <svg class={`button ${bottomPressed ? 'pressed' : ''}`} x={x} y={y + 6} width="12" viewBox="0 0 100 57" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 36.168 14.187 Q 51.202 0.642 65.531 14.187 L 87.15 34.625 Q 101.479 48.17 72.116 48.17 L 27.815 48.17 Q -1.548 48.17 13.486 34.625 Z"
      />
    </svg>

    <svg class={`left button ${leftPressed ? 'pressed' : ''}`} x={x - 6} y={y} width="12" viewBox="0 0 100 57" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 36.168 14.187 Q 51.202 0.642 65.531 14.187 L 87.15 34.625 Q 101.479 48.17 72.116 48.17 L 27.815 48.17 Q -1.548 48.17 13.486 34.625 Z"
      />
    </svg>

    <svg class={`right button ${rightPressed ? 'pressed' : ''}`} x={x + 6} y={y} width="12" viewBox="0 0 100 57" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M 36.168 14.187 Q 51.202 0.642 65.531 14.187 L 87.15 34.625 Q 101.479 48.17 72.116 48.17 L 27.815 48.17 Q -1.548 48.17 13.486 34.625 Z"
      />
    </svg>
  </Fragment>
);

export default ButtonPad;