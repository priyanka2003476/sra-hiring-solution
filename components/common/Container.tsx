import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={className}
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
        maxWidth: "80rem",
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
      }}
    >
      {children}
    </div>
  );
}