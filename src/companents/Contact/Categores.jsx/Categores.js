import React from 'react';

function Categores(props) {

  return (
    <div className="con__btns-box">
          <h1>Muhammadsodiq Contact</h1>
      <button className="con__btns" onClick={props.sortFunc} type="submit" id="allBtn">All</button>
      <button className="con__btns" onClick={props.sortFunc} type="submit" id="workBtn">Najot Ta'lim</button>
      <button className="con__btns" onClick={props.sortFunc} type="submit" id="familyBtn">Family</button>
      <button className="con__btns" onClick={props.sortFunc} type="submit" id="friendsBtn">Friends</button>
    </div>
  );
}

export default Categores;
