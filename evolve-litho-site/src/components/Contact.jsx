const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen flex justify-center items-center p-4"
    >
      <form
        name="contact-form"
        method="POST"
        action="/contact"
        data-netlify="true"
        onSubmit="submit"
        className="flex flex-col max-w-[600px] w-full text-center"
      >
        <div className="pb-8 ">
          <p className="font-bold border-b-2 text-4xl md:text-5xl inline text-white">
            Contact
          </p>
        </div>
        <input type="hidden" name="form-name" value="contact-form"/>
        <input
          className="my-2 p-2 text-black rounded-md"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-2 p-2 text-black rounded-md"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <input
          className="my-2 p-2 text-black rounded-md"
          type="text"
          placeholder="Subject"
          name="subject"
          required
        />
        <textarea
          className="my-2 p-2 resize-none text-black rounded-md"
          placeholder="Enter your message here..."
          name="message"
          rows="10"
          required
        ></textarea>
        <div className="flex p-4">
          <input className='w-4 text-blue-600 bg-gray-100 border-gray-300 rounded' type="checkbox" id="contact-form-checkbox" required />
          <label className="ml-2 text-sm font-medium dark:text-gray-300 text-white" htmlFor="contact-form-checkbox">By checking this box you agree with our <a href="/privacypolicy" className="text-blue-600 dark:text-blue-500 hover:underline">Privacy Policy</a></label>
        </div>
        <button type='submit' className="rounded-md border-2 hover:bg-gray-400 hover:border-grbg-gray-400 px-6 py-2 my-2 mx-auto flex items-center text-who text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
