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
          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <form>
              <div className="col-span-12 pb-2">
                <input type="text" />
              </div>
              <div className="col-span-12 pb-2">
                <input type="text" />
              </div>
              <div className="col-span-12 pb-2">
                <input type="text" />
              </div>
              <div className="col-span-12 pb-2">
                <input type="text" />
              </div>
            </form>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
