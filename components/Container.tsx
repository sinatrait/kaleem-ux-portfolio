import type { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div">;

export default function Container({
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-site px-gutter ${className}`}
      {...props}
    />
  );
}
