import type { SVGProps } from 'react';

interface IconDocumentProps extends React.SVGProps<SVGSVGElement> {}

const IconDocument = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.9997 1.3335H2.99967C2.82286 1.3335 2.65329 1.40373 2.52827 1.52876C2.40325 1.65378 2.33301 1.82335 2.33301 2.00016V14.0002C2.33301 14.177 2.40325 14.3465 2.52827 14.4716C2.65329 14.5966 2.82286 14.6668 2.99967 14.6668H8.66634V11.3335C8.66634 10.4148 9.41434 9.66683 10.333 9.66683H13.6663V2.00016C13.6663 1.82335 13.5961 1.65378 13.4711 1.52876C13.3461 1.40373 13.1765 1.3335 12.9997 1.3335Z"
      fill="#788391"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9.66602 11.3337V14.667L13.666 10.667H10.3327C10.1559 10.667 9.9863 10.7372 9.86128 10.8623C9.73625 10.9873 9.66602 11.1568 9.66602 11.3337Z"
      fill="#788391"
    />
  </svg>
);

export default IconDocument;
