export default function Roles({ props }) {
  return (
    <div className="flex space-x-4">
      {props.map((item, index) => {
        return (
          <h4 key={index} className="font-fira">
            #{item}
          </h4>
        );
      })}
    </div>
  );
}
