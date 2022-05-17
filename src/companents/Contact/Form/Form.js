import React from 'react';

function Form(props) {

  return (
    <form className="con__form" id="conForm" onSubmit={props.inputsFunc}>
      <h2>New contact</h2>
      <input className="con__input" onChange={props.changeFunc} type="text" name="text" id="last" placeholder="Full name" required />
      <select className="con__selec" onChange={props.changeFunc} id="select" required>
        <option className="values" value="All" id="allVal">Categories</option>
        <option className="values" value="Najot Ta'lim" id="workVal">Najot Ta'lim</option>
        <option className="values" value="Family" id="familyVal">Family contact</option>
        <option className="values" value="Friends" id="familyVal">Friends contact</option>
      </select>
      <input className="con__input" onChange={props.changeFunc} type="number" name="number" id="number" placeholder="Number" required />
      <button className="con__form_btn" onClick={props.importObj} type="submit" id="addBtn">Add contact</button>
    </form>
  );
}

export default Form;
