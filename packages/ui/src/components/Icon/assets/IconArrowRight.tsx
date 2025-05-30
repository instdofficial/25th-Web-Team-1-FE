import type { SVGProps } from 'react';

interface IconArrowRightProps extends React.SVGProps<SVGSVGElement> {}

const IconArrowRight = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.62382 20.1004C8.27882 20.1004 7.93382 19.9654 7.66382 19.7104C7.41193 19.4574 7.27051 19.1149 7.27051 18.7579C7.27051 18.4009 7.41193 18.0584 7.66382 17.8054L13.4688 12.0004L7.66382 6.21043C7.41193 5.95742 7.27051 5.61494 7.27051 5.25793C7.27051 4.90091 7.41193 4.55843 7.66382 4.30543C7.91683 4.05353 8.25931 3.91211 8.61632 3.91211C8.97334 3.91211 9.31582 4.05353 9.56882 4.30543L16.3188 11.0554C16.5707 11.3084 16.7121 11.6509 16.7121 12.0079C16.7121 12.3649 16.5707 12.7074 16.3188 12.9604L9.56882 19.7104C9.31382 19.9654 8.96882 20.1004 8.62382 20.1004Z"
      fill="#A3ADBD"
    />
  </svg>
);

export default IconArrowRight;
