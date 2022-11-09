import { useState } from "react";
import CheckBox from "../../component/checkbox/CheckBox";
import FormInput from "../../component/forminput/FormInput";
import Textarea from "../../component/textarea/Textarea";
import Footer from "../../component/footer/Footer";
import "./Contact.css";

const Contact = () => {
  const [Values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [TextAreaValue, setTextarea] = useState({
    message: "",
  });

  const [disable, setDisable] = useState(true);

  const textAreas = [
    {
      id: "message",
      name: "message",
      required: true,
      className: "textarea",
      rows: 7,
      label: "Message",
      placeholder: "Send a message and i'll reply you as soon as possible...",
      pattern: "^[A-Za-z0-9]{5,160}$",
      errorMessage: " I said Enter a Message before sending",
    },
  ];

  const checkBox = [
    {
      id: "checked",
      name: "checkbox",
      type: 'checkbox',
      required: true,
      className: "checkbox__input",
      label: "You agree to provide your data to Joex who may contact you",
      // pattern: "^[A-Za-z0-9]{5,160}$",
      // errorMessage: " I said Enter a Message before sending",
    },
  ];

  const inputs = [
    {
      id: "first__Name",
      name: "firstName",
      required: true,
      className: "first__Name",
      type: "text",
      placeholder: "Enter your First Name",
      errorMessage: "First Name is required",
      label: "First Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: "last__Name",
      name: "lastName",
      type: "text",
      required: true,
      className: "last__Name",
      placeholder: "Enter your Last Name",
      errorMessage: "Last Name is required",
      label: "Last Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: "email",
      name: "email",
      required: true,
      className: "email__input",
      type: "email",
      placeholder: "Yourname@gmail.com",
      errorMessage: "It should be a valid email address",
      label: "Email",
      pattern: "^[a-zA-Z0-9]+@(gmail|yahoo|outlook).com$",
    },
  ];
 


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("data received successfully")
  };

const handleChange = (e) => {
  setDisable(false);
}
  const onChange = (e) => {
    setValues({ ...Values, [e.target.name]: e.target.value });
    setTextarea({ ...TextAreaValue, [e.target.name]: e.target.value });
  };
  console.log(Values);
  console.log(TextAreaValue);
  return (
    <div className="contact__app">
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
          {
            checkBox.map((checkbox) => (
              <CheckBox
              key={checkbox.id}
              {...checkbox}
              onClick={handleChange}
              />

            ))}
          <div className="btn__submit btn">
            <button className="btn__link submit" disabled={disable}>
              Send message
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
