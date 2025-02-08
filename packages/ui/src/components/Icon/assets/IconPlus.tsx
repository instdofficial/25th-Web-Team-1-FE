import type { SVGProps } from 'react';

interface IconPlusProps extends React.SVGProps<SVGSVGElement> {}

const IconPlus = (props: SVGProps<SVGSVGElement>) => (
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
      d="M20.3178 10.8001H13.3178V3.8001C13.3178 3.48184 13.1913 3.17661 12.9663 2.95157C12.7413 2.72653 12.436 2.6001 12.1178 2.6001C11.7995 2.6001 11.4943 2.72653 11.2692 2.95157C11.0442 3.17661 10.9178 3.48184 10.9178 3.8001V10.8001H3.91777C3.59951 10.8001 3.29429 10.9265 3.06925 11.1516C2.8442 11.3766 2.71777 11.6818 2.71777 12.0001C2.71777 12.3184 2.8442 12.6236 3.06925 12.8486C3.29429 13.0737 3.59951 13.2001 3.91777 13.2001H10.9178V20.2001C10.9178 20.5184 11.0442 20.8236 11.2692 21.0486C11.4943 21.2737 11.7995 21.4001 12.1178 21.4001C12.436 21.4001 12.7413 21.2737 12.9663 21.0486C13.1913 20.8236 13.3178 20.5184 13.3178 20.2001V13.2001H20.3178C20.636 13.2001 20.9413 13.0737 21.1663 12.8486C21.3913 12.6236 21.5178 12.3184 21.5178 12.0001C21.5178 11.6818 21.3913 11.3766 21.1663 11.1516C20.9413 10.9265 20.636 10.8001 20.3178 10.8001Z"
      fill="#5A6471"
    />
  </svg>
);

export default IconPlus;
