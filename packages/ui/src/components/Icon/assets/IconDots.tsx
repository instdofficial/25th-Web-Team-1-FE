import type { SVGProps } from 'react';

interface IconDotsProps extends React.SVGProps<SVGSVGElement> {}

const IconDots = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.23047 14C4.96776 14 4.70764 13.9481 4.46495 13.8476C4.22226 13.747 4.00177 13.5995 3.81605 13.4137C3.63033 13.2279 3.48303 13.0074 3.38256 12.7646C3.28208 12.5219 3.2304 12.2617 3.23047 11.999C3.23053 11.7363 3.28234 11.4762 3.38294 11.2335C3.48353 10.9908 3.63095 10.7703 3.81676 10.5846C4.00257 10.3989 4.22314 10.2516 4.46587 10.1511C4.70861 10.0506 4.96876 9.99896 5.23147 9.99902C5.76203 9.99916 6.27082 10.21 6.64589 10.5853C7.02096 10.9606 7.2316 11.4695 7.23147 12C7.23134 12.5306 7.02044 13.0394 6.64518 13.4144C6.26992 13.7895 5.76103 14.0002 5.23047 14ZM12.0015 14C11.471 14 10.9623 13.7893 10.5873 13.4142C10.2122 13.0392 10.0015 12.5305 10.0015 12C10.0015 11.4696 10.2122 10.9609 10.5873 10.5858C10.9623 10.2107 11.471 10 12.0015 10C12.5319 10 13.0406 10.2107 13.4157 10.5858C13.7908 10.9609 14.0015 11.4696 14.0015 12C14.0015 12.5305 13.7908 13.0392 13.4157 13.4142C13.0406 13.7893 12.5319 14 12.0015 14ZM18.7715 14C18.5088 14 18.2486 13.9481 18.0059 13.8476C17.7633 13.747 17.5428 13.5995 17.357 13.4137C17.1713 13.2279 17.024 13.0074 16.9236 12.7646C16.8231 12.5219 16.7714 12.2617 16.7715 11.999C16.7715 11.7363 16.8233 11.4762 16.9239 11.2335C17.0245 10.9908 17.1719 10.7703 17.3578 10.5846C17.5436 10.3989 17.7641 10.2516 18.0069 10.1511C18.2496 10.0506 18.5098 9.99896 18.7725 9.99902C19.303 9.99916 19.8118 10.21 20.1869 10.5853C20.562 10.9606 20.7726 11.4695 20.7725 12C20.7723 12.5306 20.5614 13.0394 20.1862 13.4144C19.8109 13.7895 19.302 14.0002 18.7715 14Z"
      fill="#A3ADBD"
    />
  </svg>
);

export default IconDots;
