import React from "react";
import "./CustomButton.css";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  styleType?: "default" | "add" | "delete" | "other";
  className?: string | string[];
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  type = "button",
  styleType = "default",
  className = "",
}) => {
  const styleTypeClass = styleType ? `button-${styleType}` : "";

  const combinedClassNames = ["button", styleTypeClass]
    .concat(Array.isArray(className) ? className : className.split(" "))
    .join(" ")
    .trim();

  return (
    <button type={type} onClick={onClick} className={combinedClassNames}>
      {label}
    </button>
  );
};

export default CustomButton;
