import type { SVGProps } from 'react';

interface IconPencilProps extends React.SVGProps<SVGSVGElement> {}

const IconPencil = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12.3349 5.45378L3.27288 14.5158L2.03688 19.1258L1.22388 22.1628C1.2013 22.2476 1.20142 22.3369 1.22421 22.4217C1.24701 22.5065 1.29169 22.5838 1.35377 22.6459C1.41586 22.708 1.49317 22.7527 1.57796 22.7754C1.66275 22.7982 1.75204 22.7984 1.83688 22.7758L4.87189 21.9618L9.48288 20.7258H9.48388L18.5459 11.6638L12.3359 5.45378H12.3349ZM22.2929 6.50378L17.4969 1.70678C17.4041 1.61383 17.2939 1.54009 17.1726 1.48978C17.0513 1.43947 16.9212 1.41357 16.7899 1.41357C16.6586 1.41357 16.5285 1.43947 16.4072 1.48978C16.2859 1.54009 16.1757 1.61383 16.0829 1.70678L13.6079 4.18078L19.8189 10.3918L22.2929 7.91678C22.3858 7.82399 22.4596 7.71378 22.5099 7.59247C22.5602 7.47115 22.5861 7.34111 22.5861 7.20978C22.5861 7.07844 22.5602 6.9484 22.5099 6.82708C22.4596 6.70577 22.3858 6.59556 22.2929 6.50278"
      fill="#A3ADBD"
    />
  </svg>
);

export default IconPencil;
