import type { SVGProps } from 'react';

interface IconStarProps extends React.SVGProps<SVGSVGElement> {}

const IconStar = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.1537 1.92696L15.4807 6.64196C15.6677 7.02096 16.0297 7.28396 16.4487 7.34496L21.6517 8.10096C22.7057 8.25396 23.1277 9.55096 22.3637 10.294L18.5987 13.964C18.4495 14.1095 18.3378 14.2891 18.2734 14.4873C18.2089 14.6856 18.1936 14.8965 18.2287 15.102L19.1177 20.284C19.2977 21.335 18.1957 22.135 17.2527 21.64L12.5987 19.193C12.4143 19.0959 12.2091 19.0452 12.0007 19.0452C11.7923 19.0452 11.5871 19.0959 11.4027 19.193L6.74868 21.64C5.80468 22.135 4.70268 21.335 4.88268 20.284L5.77168 15.102C5.80669 14.8965 5.79131 14.6856 5.72686 14.4874C5.66242 14.2892 5.55083 14.1096 5.40168 13.964L1.63668 10.294C0.873683 9.55096 1.29468 8.25396 2.34968 8.10096L7.55168 7.34496C7.97068 7.28396 8.33368 7.02096 8.52068 6.64196L10.8467 1.92696C11.3187 0.970961 12.6817 0.970961 13.1537 1.92696Z"
      fill="#A3ADBD"
    />
  </svg>
);

export default IconStar;
