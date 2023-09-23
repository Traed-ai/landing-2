import React from "react";

interface ButtonInterface {
  height: string;
  width: string;
  backgroundColor: string;
  color: string;
  borderRadius: string;
  children: any;
}

function Button({
  height,
  width,
  backgroundColor,
  color,
  borderRadius,
  children,
}: ButtonInterface) {
  return (
    <div
      style={{
        background: backgroundColor,
        color: color,
        borderRadius: borderRadius,
        height: height,
        width: width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {children}
    </div>
  );
}

export default Button;
