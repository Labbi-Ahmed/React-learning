import React from "react";
import "./CustomButton.css";
import { Tooltip } from "antd";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  styleType?: "default" | "add" | "delete" | "other";
  className?: string | string[];
  tooleTip?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  type = "button",
  styleType = "default",
  className = "",
  tooleTip = "Click!",
}) => {
  const styleTypeClass = styleType ? `button-${styleType}` : "";

  const combinedClassNames = ["button", styleTypeClass]
    .concat(Array.isArray(className) ? className : className.split(" "))
    .join(" ")
    .trim();

  return (
    <>
      <Tooltip title={tooleTip}>
        <button type={type} onClick={onClick} className={combinedClassNames}>
          {label}
        </button>
      </Tooltip>
    </>
  );
};

export default CustomButton;
