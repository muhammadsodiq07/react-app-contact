import React, { Component } from "react";
import OutputContact from "../OutputContact/OutputContact";
import "./Contact.scss";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      category: "",
    };
  }

  addContacForm = (e) => {
    e.preventDefault();
    if (this.state.name === "" || this.state.phone === "") {
      alert("ALl the fields are mandatory!");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", phone: "", category: "" });
  };

  render() {
    return (
      <div className="container">
        <h1 className="contact__header">Muhammadsodiq Contact</h1>
        <div className="contact__wrap">
          <div className="contact__new">
            <h2 className="contact__title">New contact</h2>
            <form onSubmit={this.addContacForm} className="contact__form">
              <input
                type="text"
                className="contact__name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
              <select
                onChange={(e) => this.setState({ category: e.target.value })}
                className="contact__relationship"
              >
                <option value="Family">Family</option>
                <option value="Friend">Friend</option>
                <option value="Najot Talim">Najot Talim</option>
                <option value="Classmate">Classmate</option>
              </select>
              <input
                type="number"
                className="contact__phone"
                placeholder="Phone"
                value={this.state.phone}
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
              <button className="contact__btn" type="submit">
                Add contact
              </button>
            </form>
          </div>
          <div className="contact__list-wrap">
            <div className="contact__list-top">
              <h2 className="contact__title">Contacts</h2>
              <input type="search" id="search" placeholder="Search..." />
            </div>
            <div className="tags">
              <button className="tag btn all">All</button>
              <button className="tag btn classmate">Classmate</button>
              <button className="tag btn friend">Friend</button>
              <button className="tag btn family">Family</button>
              <button className="tag btn relative">Najot Talim</button>
            </div>
            <OutputContact
                userName={this.state.name}
                phone={this.state.phone}
                category={this.state.category}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
