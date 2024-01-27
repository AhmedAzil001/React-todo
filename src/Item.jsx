import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const Item = ({ title, index, DelTask , EditTask}) => {
  return (
    <div className="items">
      <div className="title">
        <p>{title}</p>
      </div>
      <div className="btnDiv">
        <button className="editBtn" onClick={()=> EditTask(index)}>
          <FiEdit color="black" />
        </button>
        <button className="DelBtn" onClick={() => DelTask(index)}>
          <AiFillDelete color="black" />
        </button>
      </div>
    </div>
  );
};

export default Item;
