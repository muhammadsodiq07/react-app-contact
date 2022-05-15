import React from "react";
import "./OutputContact.scss";

function OutputContact({ userName, category, phone }) {
  return (
    <li className="list__item">
      <h3 className="name">{userName}</h3>
      <a className="phone" href="/">
        {phone}
      </a>
      <p className="relation">{category}</p>
    </li>
  );
}

export default OutputContact;
