import React from "react";
import "./OutputContact.scss";

function OutputContact(props) {
  return (
    <div>
      <li className="list__item">
      <h3 className="name">{props.name}</h3>
      <a className="phone" href="/">
        {props.number}
      </a>
      <p className="relation">{props.category}</p>
    </li>
    </div>
  );
}

export default OutputContact;
