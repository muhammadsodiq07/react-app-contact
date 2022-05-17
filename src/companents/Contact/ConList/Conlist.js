import React from 'react';

function Conlist(props) {

  return (
    <ul className="con__list">
      {props.obj.map((obj, i) => (
        <li className="con__item" key={i}>
          <div className="con__item-box">
            <button className='remove' id={i}>Delete</button>
            <p className="conn-namee">{obj.categores}</p>
            <div className="con__icon">
              <i className="bx bxs-contact" />
            </div>
            <div className="con__names">
              <p className="ite__tit">{obj.name}</p>
              <a className="ite__link" href="tel:123456789">+998 9{obj.number}</a>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Conlist;
