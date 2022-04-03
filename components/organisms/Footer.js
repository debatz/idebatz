import Image from "next/image";
import Container from "@components/templates/Container";
import { IconContext } from "react-icons";
import { VscGithubInverted } from "react-icons/vsc";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-24 pb-4 md:pt-28 md:pb-12">
      <IconContext.Provider value={{ className: "w-6 h-6 md:w-8 md:h-8" }}>
        <Container>
          <div className="flex items-end justify-between">
            <div className="md:hidden">
              <Image
                src="/badge.svg"
                width="50"
                height="50"
                alt="heraldic badge"
              />
            </div>
            <div className="hidden md:block">
              <Image
                src="/badge.svg"
                width="100"
                height="100"
                alt="heraldic badge"
              />
            </div>

            <div className="flex cursor-ff1">
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
