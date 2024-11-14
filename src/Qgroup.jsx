import { useState } from "react";
import iconPlus from "./assets/images/icon-plus.svg";
import iconMin from "./assets/images/icon-minus.svg";

// eslint-disable-next-line react/prop-types
export default function Qgroup({ question, answer }) {
  const [open, setOpen] = useState(false);
  function handleOpen() {
    setOpen(!open);
  }
  return (
    <div className="q-group">
      <div className="question">
        <h4>{question}</h4>
        <a className="collapse" onClick={handleOpen}>
          {open ? (
            <img className="min" src={iconMin} alt="min" />
          ) : (
            <img className="min" src={iconPlus} alt="plus" />
          )}
        </a>
      </div>
      {open && <p className="text">{answer}</p>}
    </div>
  );
}
