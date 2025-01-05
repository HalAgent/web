import React from "react";
import "./index.css";

interface BoxProps {
  contentClassName?: string;
  className?: string;
  children?: React.ReactNode;
}

export const Box: React.FC<BoxProps> = ({
  children,
  className = "flex flex-col justify-center items-center",
  contentClassName,
}) => {
  return (
    <div className={`box ${className}`}>
      <div className={`box-content ${contentClassName}`}>{children}</div>
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </div>
  );
};
