const ContactForm = () => {
  return (
    <form
      className="wrapperDiv1"
      action="https://formspree.io/f/mwkdpnal"
      method="POST"
    >
      <div className="formDiv1">
        <h3>Send a message</h3>
      </div>
      <input
        className="input1"
        type="text"
        placeholder="Name"
        autoComplete="off"
        name="Name"
        required
      />
      <input
        className="input2"
        type="email"
        placeholder="Email"
        autoComplete="off"
        name="Email"
        required
      />
      <input
        className="input3"
        type="text"
        placeholder="Your Message..."
        autoComplete="off"
        name="Message"
        required
      />
      <button>Submit</button>
    </form>
  );
};

export default ContactForm;
