import type { SVGProps } from 'react';

interface IconNoteProps extends React.SVGProps<SVGSVGElement> {}

const IconNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.1765 27.7648H8.94118C7.31681 27.7648 6 26.448 6 24.8236V7.17653C6 5.55216 7.31681 4.23535 8.94118 4.23535H23.0588C24.6832 4.23535 26 5.55216 26 7.17653V18.9412M17.1765 27.7648V21.8824C17.1765 20.2612 18.4965 18.9412 20.1176 18.9412H26M17.1765 27.7648L26 18.9412"
      stroke="#A3ADBD"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 10H19.5"
      stroke="#A3ADBD"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5 14.147H15.5"
      stroke="#A3ADBD"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default IconNote;
