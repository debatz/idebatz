import HeroTitle from "@components/atoms/HeroTitle";
import LinkComponent from "@components/atoms/LinkComponent";
import Nav from "@components/molecules/Nav";
import Container from "@components/templates/Container";

export default function Hero() {
  return (
    <section>
      <Container>
        <div className="flex items-center justify-between">
          <div className="w-4/5">
            <HeroTitle>
              <span className="italic font-semibold">batz:</span> I am a{" "}
              <span className="italic font-medium">front-end developer</span>{" "}
              with a polymath background. Currently a BScCS student at the{" "}
              <LinkComponent href="https://london.ac.uk/courses/computer-science">
                University of London
              </LinkComponent>
              . Former digital marketer & startup founder.
            </HeroTitle>
          </div>
          <div className="w-1/5">
            <Nav />
          </div>
        </div>
      </Container>
    </section>
  );
}
