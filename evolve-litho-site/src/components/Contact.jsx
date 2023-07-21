const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen flex justify-center items-center p-4 text-white"
    >
      <form
        method="POST"
        action="https://getform.io/f/783c36bb-e383-40b8-a67a-b6c14c7906a7"
        className="flex flex-col max-w-[600px] w-full text-center"
      >
        <div className="pb-8 ">
          <p className="font-bold border-b-2 text-4xl md:text-5xl inline ">
            Contact
          </p>
        </div>
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
        <button className="rounded-md border-2 hover:bg-[#ff3d00] hover:border-[#ff3d00] px-6 py-2 my-2 mx-auto flex items-center text-who">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
