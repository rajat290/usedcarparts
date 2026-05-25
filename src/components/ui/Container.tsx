import type { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Container({ className, children }: ContainerProps) {
  return <div className={cx("container-shell", className)}>{children}</div>;
}
