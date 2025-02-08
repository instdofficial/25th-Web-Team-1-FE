import type { SVGProps } from 'react';

interface IconUnSelectedCheckboxProps extends React.SVGProps<SVGSVGElement> {}

const IconUnSelectedCheckbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.39608 4.3951C5.39628 3.39491 6.75283 2.83301 8.16732 2.83301H19.834C21.2485 2.83301 22.605 3.39491 23.6052 4.3951C24.6054 5.3953 25.1673 6.75185 25.1673 8.16634V19.833C25.1673 21.2475 24.6054 22.604 23.6052 23.6042C22.605 24.6044 21.2485 25.1663 19.834 25.1663H8.16732C6.75283 25.1663 5.39628 24.6044 4.39608 23.6042C3.39589 22.604 2.83398 21.2475 2.83398 19.833V8.16634C2.83398 6.75185 3.39589 5.3953 4.39608 4.3951Z"
      stroke="#A3ADBD"
    />
  </svg>
);

export default IconUnSelectedCheckbox;
