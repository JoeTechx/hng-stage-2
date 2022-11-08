import { useState } from "react";
import "./Textarea.css";

const Textarea = (props) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  };
  const { label, errorMessage, onChange, id, ...textAreasProps } = props;
  return (
    <div className="textarea__input">
      <label className="label__textarea">{label}</label>
      <textarea
        {...textAreasProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      ></textarea>
      <span>{errorMessage}</span>
    </div>
  );
};

export default Textarea;
