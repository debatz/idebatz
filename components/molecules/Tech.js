export default function Tech({ props }) {
  return (
    <div className="flex space-x-4">
      {props.map((item, index) => {
        return (
          <h4 key={index} className="text-xs md:text-base font-fira">
            {"{"}
            {item}
            {"}"}
          </h4>
        );
      })}
    </div>
  );
}
