import type { SVGProps } from 'react';

interface IconCalendarProps extends React.SVGProps<SVGSVGElement> {}

const IconCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M19 3H20C21.1 3 22 3.9 22 5V21C22 22.1 21.1 23 20 23H4C2.9 23 2 22.1 2 21V5C2 3.9 2.9 3 4 3H5V2C5 1.45 5.45 1 6 1C6.55 1 7 1.45 7 2V3H17V2C17 1.45 17.45 1 18 1C18.55 1 19 1.45 19 2V3ZM5 21H19C19.55 21 20 20.55 20 20V8H4V20C4 20.55 4.45 21 5 21Z"
      fill="#A3ADBD"
    />
  </svg>
);

export default IconCalendar;
