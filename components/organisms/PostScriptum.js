import Container from "@components/templates/Container";
import EndTitle from "@components/atoms/EndTitle";
import LinkComponent from "@components/atoms/LinkComponent";

export default function PostScriptum() {
  return (
    <section>
      <Container>
        <div>
          <EndTitle>
            Previous work includes digital marketing in Spanish & SF{" "}
            <LinkComponent href="https://www.crunchbase.com/organization/airwork">
              startups
            </LinkComponent>
            , video/film work, and legal consultancy.
          </EndTitle>
        </div>
      </Container>
    </section>
  );
}
