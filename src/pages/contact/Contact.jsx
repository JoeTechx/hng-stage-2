import { useState } from "react";
import CheckBox from "../../component/checkbox/CheckBox";
import FormInput from "../../component/forminput/FormInput";
import Textarea from "../../component/textarea/Textarea";
import "./Contact.css";

const Contact = () => {
  const [Values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [TextAreaValue, setTextarea] = useState({
    message: "",
  });

  const textAreas = [
    {
      id: "message",
      name: "textarea",
      placeholder: "Send a message and i'll reply you as soon as possible...",
      label: "Message",
      rows: 7,
      className: "textarea",
    },
  ];

  const inputs = [
    {
      id: "first__Name",
      name: "firstName",
      className:'first__Name',
      type: "text",
      placeholder: "Enter your First Name",
      label: "First Name",
    },
    {
      id: "last__Name",
      name: "lastName",
      type: "text",
      className: "last__Name",
      placeholder: "Enter your Last Name",
      label: "Last Name",
    },
    {
      id: "email",
      name: "email",
      className: "email__input",
      type: "email",
      placeholder: "Yourname@gmail.com",
      label: "Email",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
    setTextarea({ ...TextAreaValue, [e.target.name]: e.target.value });
  };
  console.log(Values);
  return (
    <div className="app">
      <div className="contact__header">
        <p className="header__title">Contact Me</p>
        <small className="header__subtitle">
          Hi there, contact me to ask me about anything you have in mind.
        </small>
      </div>
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={Values[input.name]}
            onChange={onChange}
          />
        ))}
        {textAreas.map((textArea) => (
          <Textarea
            key={textArea.id}
            {...textArea}
            value={TextAreaValue[textArea.name]}
            onChange={onChange}
          />
        ))}
        <CheckBox/>
        <button>send Message</button>
      </form>
    </div>
  );
};

export default Contact;
