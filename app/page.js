import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Results from "@/components/Results";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generate"></meta>
        <link rel="icon" href="/favicon.icon"></link>
      </Head>
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Results */}
      <Results />
    </div>
  );
}
