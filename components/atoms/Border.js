import { twClass } from "@utils/twClass";

export default function Border({ className }) {
  return (
    <div
      className={twClass("border-black border-y", className && `${className}`)}
    ></div>
  );
}
