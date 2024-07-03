import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={"Contact Us"}
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid text-center w-full pt-36 pb-28">
            <p className="text-4xl pb-10">E-mail : raveeshavishwajith@gmail.com</p>
            <p className="text-4xl">Mobile : 071 - 714 4135</p>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
