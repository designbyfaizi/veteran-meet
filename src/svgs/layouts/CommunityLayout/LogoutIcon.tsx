const LogoutIcon = ({svgClass}: {svgClass: string}) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClass}
    >
      <path
        d="M7 17.25H1.75C1.55109 17.25 1.36032 17.171 1.21967 17.0303C1.07902 16.8897 1 16.6989 1 16.5V1.5C1 1.30109 1.07902 1.11032 1.21967 0.96967C1.36032 0.829018 1.55109 0.75 1.75 0.75H7"
        stroke="#343434"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7 9H17.4972"
        stroke="#343434"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13.5635 5.0625L17.4999 9L13.5635 12.9375"
        stroke="#343434"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
