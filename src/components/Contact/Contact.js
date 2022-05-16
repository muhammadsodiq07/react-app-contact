import React from 'react';
import "./Contact.scss";

function Contact(props) {
  return (
    <div className="container">
    <h1 className="contact__header">Muhammadsodiq Contact</h1>
    <div className="contact__wrap">
      <div className="contact__new">
        <h2 className="contact__title">New contact</h2>
        <form onSubmit={props.addContacForm} className="contact__form">
          <input
            type="text"
            className="contact__name"
            placeholder="Name"
            onChange={props.typeHandler}
            />
          <select type="select" onChange={props.selectFun}
          className="contact__relationship">
            <option value="Family">Family</option>
            <option value="Friend">Friend</option>
            <option value="Najot Talim">Najot Talim</option>
            <option value="Classmate">Classmate</option>
          </select>
          <input
            type="number"
            className="contact__phone"
            placeholder="Phone"
            onChange={props.typeHandler}
          />
          <button className="contact__btn" type="submit">
            Add contact
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Contact
