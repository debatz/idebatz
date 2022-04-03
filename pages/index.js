import Hero from "@components/organisms/Hero";
import Head from "next/head";
import Container from "@components/templates/Container";
import LinkComponent from "@components/atoms/LinkComponent";
import EndTitle from "@components/atoms/EndTitle";
import Experience from "@components/organisms/Experience";
import Footer from "@components/organisms/Footer";
import PostScriptum from "@components/organisms/PostScriptum";
import HeroTitle from "@components/atoms/HeroTitle";

const jobs = [
  {
    title: "Cobas Asset Management",
    href: "https://cobasam.com/",
    year: "22",
    roles: ["Full-Stack", "DigitalConsultancy"],
    tech: ["NextJS", "React", "PostgreSQL", "Azure DF"],
    more: "Design and coding of back-office applications.",
  },
  {
    title: "tagle.dev",
    href: "https://tagle.dev/",
    year: "21—22",
    roles: ["Owner", "Freelance"],
    tech: ["NextJS", "React", "Sanity", "Eleventy"],
    more: "It channels my freelance work.",
  },
  {
    title: "Claps AI, Inc.",
    href: "https://claps.ai/",
    year: "21",
    roles: ["COO"],
    tech: ["Swift", "SwiftUI"],
    more: "+200K € raised in seed funding by Eneko Knorr & others.",
  },
  {
    title: "CMC Group (acquired by CGI)",
    href: "https://www.cgi.com/",
    year: "19—21",
    roles: ["Digital Marketing", "Front-End"],
    tech: ["Eleventy", "JavaScript", "CSS", "SQL", "SageCRM"],
    more: "Marketing Consultant and eventually moved into ad-hoc crafted landing pages.",
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Batz</title>
        <meta name="description" content="Batz's personal website" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <main className="mt-6 space-y-12 md:space-y-24 md:mt-12">
        <Hero />
        <Experience props={jobs} />
        <PostScriptum />
      </main>
      <Footer />
    </div>
  );
}
