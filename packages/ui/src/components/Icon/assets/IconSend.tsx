import type { SVGProps } from 'react';

interface IconSendProps extends React.SVGProps<SVGSVGElement> {}

const IconSend = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M26.7195 3.09922C28.0742 2.62589 29.3755 3.92722 28.9021 5.28189L21.0021 27.8552C20.4888 29.3192 18.4488 29.4019 17.8195 27.9846L14.0075 19.4086L19.3728 14.0419C19.5495 13.8523 19.6456 13.6016 19.641 13.3425C19.6365 13.0835 19.5315 12.8363 19.3483 12.6531C19.1651 12.4698 18.9179 12.3649 18.6588 12.3603C18.3998 12.3558 18.149 12.4519 17.9595 12.6286L12.5928 17.9939L4.01681 14.1819C2.59948 13.5512 2.68348 11.5126 4.14615 10.9992L26.7195 3.09922Z"
      fill="#0E0F15"
    />
  </svg>
);

export default IconSend;
