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
      <div className="corner-decoration box-top-left"></div>
      <div className="corner-decoration box-top-right"></div>
      <div className="corner-decoration box-bottom-left"></div>
      <div className="corner-decoration box-bottom-right"></div>
    </div>
  );
};
