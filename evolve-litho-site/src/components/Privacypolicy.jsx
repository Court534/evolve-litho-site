import Logo from "../assets/evolve-litho-logo.jpg";
import { HiArrowCircleLeft } from "react-icons/hi";

const Privacypolicy = () => {
  return (
    <div>
      {/* Navbar/Return */}
      <div className="fixed flex justify-between items-center h-26 w-full mx-auto p-6 text-white bg-black">
      {/* Logo */}
      <a href="/">
        <img src={Logo} alt="Company Logo" className="h-28" />
      </a>

      {/* Nav Items */}
      <ul className="flex gap-4 cursor-pointer">
        <li className="p-4 hover:font-bold hover:scale-110 hover:text-gray-400">
            <a href="/" className="hover:text-gray-400 hover:scale-110"><HiArrowCircleLeft size={50}/></a>
        </li>
        </ul>
      </div>
      
      {/* Container */}
      <div className="text-white w-full min-h-screen justify-center items-center p-4 pt-44">
        <p className="font-bold border-b-2 text-4xl md:text-5xl inline text-white">
          Privacy Policy
        </p>
        <div className="p-4">
          <div className="py-4">
            <p className="text-2xl font-bold py-2">Introduction</p>
            <p className="text-xl">
              Evolve Litho ("we, "us", "our") takes the privacy of your
              information very seriously. This privacy policy applies to our use
              of any and all data collected by us or provided by you in relation
              to your use of our website. Please read this privacy policy
              carefully.
            </p>
          </div>

          <div className="py-2">
            <p className="text-2xl font-bold py-4">
              Collecting personal information
            </p>
            <p className="text-xl">
              We may collect, store and use the following kinds of personal
              information:
            </p>
            <br />
            <ul className="text-xl">
              <li>
                - Information about your computer and about your visits to and
                use of this website, such as your IP address, geographical
                location, browser type, referral source, length of visit and
                number of page views
              </li>
              <br />
              <li>
                - Information relating to any transactions carried out between
                you and us on or in relation to this website, including
                information relating to any purchases you make of our goods or
                services
              </li>
              <br />
              <li>
                - Information that you provide to us for the purpose of
                registering with us and allowing us to send you email
                notifications and/or promotional information
              </li>
              <br />
              <li>
                - Information that you provide to us for the purpose of signing
                up for our website services, email notifications and/or
                newsletters
              </li>
            </ul>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold py-2">
              Using your personal information
            </h2>
            <div className="text-xl">
              <p>
                Personal information submitted to us via this website will be
                used for the purposes specified in this privacy policy or in
                relevant parts of the website. We may use your personal
                information to:
              </p>
              <br />
              <ul>
                <li>- Administer the website</li>
                <br />
                <li>
                  - Improve your browsing experience by personalising the
                  website
                </li>
                <br />
                <li>
                  - Enable your use of the services available on the website
                </li>
                <br />
                <li>
                  - Send you goods purchased via the website, and supply to you
                  services purchased via the website
                </li>
                <br />
                <li>
                  - Send statements and invoices to you, and collect payments
                  from you
                </li>
                <br />
                <li>- Send you marketing communications</li>
              </ul>
            </div>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold py-2">Cookies</h2>
            <p className="text-xl">
              Our website uses cookies. A cookie is a file containing an
              identifier (a string of letters and numbers) that is sent by a web
              server to a web browser, and stored by the browser. The identifier
              is then sent back to the server each time the browser requests a
              page from the server. This enables the web server to identify and
              track the web browser.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold py-2">Policy amendments</h2>
            <p className="text-xl">
              We may update this privacy policy from time-to-time by posting a new
              version on our website. You should check this page occasionally to
              ensure you are happy with any changes.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold py-2">Your rights</h2>
            <p className="text-xl">
              You may instruct us to provide you with any personal information we
              hold about you. Provision of such information may be subject to the
              payment of a fee.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold py-2">Third party websites</h2>
            <p className="text-xl">
              The website contains links to other websites. We are not responsible
              for the privacy policies or practices of third party websites.
            </p>
          </div>
          
          <div className="py-4">
            <h2 className="text-2xl font-bold py-2">Updating information</h2>
            <p className="text-xl">
              Please let us know if the personal information which we hold about
              you needs to be corrected or updated.
            </p>
          </div>

          <div className="py-4">
            <h2 className="text-2xl font-bold py-2">Contact</h2>
            <p className="text-xl">
              If you have any questions about this privacy policy or our treatment
              of your personal data, please write to us by email to <a href="mailto:info@evolvelitho.co.uk" className="text-blue-600 dark:text-blue-500 hover:underline">info@evolvelitho.co.uk</a> or by post to Evolve Litho Limited, Unit 103 Basepoint, Rivermead Drive, Swindon, United Kingdom, SN5 7EX.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacypolicy;
