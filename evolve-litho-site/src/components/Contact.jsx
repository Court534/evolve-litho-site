import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const nav = useNavigate();

  // Formik Logic
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      pp: false,
    },

    // Validate form
    validationSchema: Yup.object({
      name: Yup.string().max(20, "Name must not be longer than 20 characters"),
      email: Yup.string().email("Invalid email address"),
      subject: Yup.string(),
      message: Yup.string(),
      pp: Yup.boolean().oneOf([true], "You must agree to our Privacy Policy"),
    }),

    // Submit form
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      nav("/success");
      setSubmitting(false);
    },
  });

  return (
    <div
      name="contact"
      className="w-full min-h-screen flex justify-center items-center p-4"
    >
      <form
        name="contact-form"
        method="POST"
        action="/"
        onSubmit={formik.handleSubmit}
        className="flex flex-col max-w-[600px] w-full text-center"
      >
        <div className="pb-8 ">
          <p className="font-bold border-b-2 text-4xl md:text-5xl inline text-white">
            Contact
          </p>
        </div>

        <input
          className="my-2 p-2 text-black rounded-md"
          type="text"
          placeholder="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          required
        />

        <input
          className="my-2 p-2 text-black rounded-md"
          type="email"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          required
        />

        <input
          className="my-2 p-2 text-black rounded-md"
          type="text"
          placeholder="Subject"
          name="subject"
          value={formik.values.subject}
          onChange={formik.handleChange}
          required
        />

        <textarea
          className="my-2 p-2 resize-none text-black rounded-md"
          placeholder="Enter your message here..."
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          rows="10"
          required
        ></textarea>

        <div className="flex p-4">
          <input
            className="w-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
            type="checkbox"
            name="pp"
            checked={formik.values.pp}
            onChange={formik.handleChange}
            id="contact-form-checkbox"
            required
          />

          <label
            className="ml-2 text-sm font-medium dark:text-gray-300 text-white"
            htmlFor="contact-form-checkbox"
          >
            By checking this box you agree with our{" "}
            <a
              href="/privacypolicy"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Privacy Policy
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="rounded-md border-2 hover:bg-gray-400 hover:border-grbg-gray-400 px-6 py-2 my-2 mx-auto flex items-center text-who text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
