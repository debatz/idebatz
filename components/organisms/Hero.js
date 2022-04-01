import HeroTitle from "@components/atoms/HeroTitle";
import LinkComponent from "@components/atoms/LinkComponent";
import Nav from "@components/molecules/Nav";
import Container from "@components/templates/Container";
import Border from "@components/atoms/Border";

export default function Hero() {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <div className="w-4/5">
          <HeroTitle>
            <span className="italic font-semibold">batz:</span> I am a{" "}
            <span className="italic font-medium">front-end developer</span> with
            a polymath background. Currently a BScCS student at the{" "}
            <LinkComponent>University of London</LinkComponent>. Former digital
            marketer & startup founder.
          </HeroTitle>
        </div>
        <div className="w-1/5">
          <Nav />
        </div>
      </div>
    </Container>
  );
}
