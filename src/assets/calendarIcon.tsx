import * as React from "react";
const CalendarIcon = (
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) => {
  const width = props.width || "20px";
  const height = props.height || "20px";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      {...props}
    >
      <title />
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M11.9 5.9v6l.1.1 2.1 2.1" />
        <circle cx={12} cy={12} r={10} data-name="Circle" />
      </g>
    </svg>
  );
};
export default CalendarIcon;
