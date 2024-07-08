import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import axios from "axios";
import Head from "next/head";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsEmailValid(emailRegex.test(value));
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await toast.promise(
        axios.post("/api/send-email", formData),
        {
          loading: "Sending Email...",
          success: (data) => {
            if (data.data.success) {
              return "Email sent successfully!";
            }
          },
          error: "Failed to Update report!",
        }
      );

      if (response.data.success) {
        setFormData({
          fname: "",
          lname: "",
          email: "",
          message: "",
        });
      } else {
        toast.dismiss();
        toast.error("Failed to send email.");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("An error occurred.");
    }
  };
  return (
    <>
      <Toaster />
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className="flex justify-center items-center">
        <Layout className="pt-16 mb-10">
          <AnimatedText
            text={"Contact Us"}
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="w-4/12 md:w-10/12 p-6 rounded-md m-auto">
            <form onSubmit={handleSubmit}>
              <div className="flex md:block sm:block  mb-3">
                <input
                  type="text"
                  name="fname"
                  className="shadow appearance-none border border-solid border-dark dark:border-light dark:bg-light dark:text-dark dark:hover:border-light md:w-full sm:w-full md:mb-3 sm:mb-3 md:mr-0 sm:mr-0 rounded-xl w-full mr-4 py-2 px-3 text-lg leading-tight text-light"
                  placeholder="First Name"
                  value={formData.fname}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lname"
                  className="shadow appearance-none border border-solid border-dark dark:border-light dark:bg-light dark:text-dark dark:hover:border-light md:w-full sm:w-full md:mr-0 sm:mr-0 rounded-xl  w-full py-2 px-3 text-lg leading-tight text-light"
                  placeholder="Last Name"
                  value={formData.lname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className={`shadow appearance-none border border-solid border-dark dark:border-light dark:bg-light dark:text-dark dark:hover:border-light rounded-xl w-full py-2 px-3 text-lg leading-tight ${
                    isEmailValid
                      ? "text-light"
                      : "text-red-500 dark:text-red-500"
                  }`}
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {!isEmailValid && (
                  <p className="text-red-500 text-sm">
                    Please enter a valid email address.
                  </p>
                )}
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  className="shadow appearance-none border border-solid border-dark dark:border-light dark:bg-light dark:text-dark dark:hover:border-light rounded-xl w-full py-2 px-3 text-lg leading-tight text-light"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className="mb-3 text-center">
                <button
                  type="submit"
                  className=" bg-dark text-light shadow-md border border-solid border-dark px-6 py-3 rounded-xl hover:bg-light hover:text-dark dark:border-light dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:w-12 md:h-12 md:text-[10px] font-bold "
                >
                  Contact Now
                </button>
              </div>
            </form>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Contact;
