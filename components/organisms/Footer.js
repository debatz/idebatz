import Image from "next/image";
import Container from "@components/templates/Container";
import { IconContext } from "react-icons";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-32">
      <IconContext.Provider value={{ className: "w-8 h-8" }}>
        <Container>
          <div className="flex items-end justify-between">
            <Image src="/badge.svg" width="100" height="100" alt="heraldic badge"></Image>
            <div className="flex">
              <a className="p-2 cursor-ff1" href="https://github.com/debatz">
                <VscGithubInverted />
              </a>
              <a
                className="p-2 cursor-ff1"
                href="https://www.linkedin.com/in/ibatz/"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </Container>
      </IconContext.Provider>
    </footer>
  );
}
