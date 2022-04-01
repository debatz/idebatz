import LinkComponent from "@components/atoms/LinkComponent";
import Roles from "@components/molecules/Roles";
import Tech from "@components/molecules/Tech";
import Container from "@components/templates/Container";

export default function Experience({ props }) {
  return (
    <Container>
      <ul className="space-y-6">
        {props.map((item, index) => {
          return (
            <li key={index} className="border-t border-black">
              <div className="flex justify-between py-4">
                <div className="space-y-2">
                  <h1 className="text-5xl font-brygada">
                    <LinkComponent href={item.href}>{item.title}</LinkComponent>
                  </h1>
                  <p className="text-2xl font-brygada">{item.more}</p>
                  <div>
                    <Roles props={item.roles} />
                    <Tech props={item.tech} />
                  </div>
                </div>
                <h3 className="text-5xl font-brygada">{item.year}</h3>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
