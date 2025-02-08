import type { SVGProps } from 'react';

interface IconArrowLineBottomProps extends React.SVGProps<SVGSVGElement> {}

const IconArrowLineBottom = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.89848 8.63823C3.89848 8.29323 4.03348 7.94823 4.28848 7.67823C4.54148 7.42633 4.88396 7.28491 5.24098 7.28491C5.59799 7.28491 5.94047 7.42633 6.19348 7.67823L11.9985 13.4832L17.7885 7.67823C18.0415 7.42633 18.384 7.28491 18.741 7.28491C19.098 7.28491 19.4405 7.42633 19.6935 7.67823C19.9454 7.93123 20.0868 8.27371 20.0868 8.63073C20.0868 8.98775 19.9454 9.33023 19.6935 9.58323L12.9435 16.3332C12.6905 16.5851 12.348 16.7265 11.991 16.7265C11.634 16.7265 11.2915 16.5851 11.0385 16.3332L4.28848 9.58323C4.03348 9.32823 3.89848 8.98323 3.89848 8.63823Z"
      fill="#A3ADBD"
    />
  </svg>
);

export default IconArrowLineBottom;
