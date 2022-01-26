import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className=" font-helvetica_now text-project relative selection:bg-gray_project selection:text-white">
      <Head>
        <title>Portfolio | Jesus Rondon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />

      <Projects />
    </div>
  );
}
