import React from "react";
import Data1 from "./Data1";
import Data2 from "./Data2";

function TargetPage(props) {
  return (
    <div className="target-div">
      <div id="target-div-1">
        <h2>My Current Target</h2>
        <p>
          The target program is the program being tested. It can be a binary
          code with or without source code, a program for consuming files or a
          network service program
        </p>
      </div>

      <div className="target-div-2">
        <div id="details-2">
          {Data1.map((item) => (
            <div className="moredetails-2">
              <img src={item.image} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a className="a-tag-div-2">{item.tag}</a>
            </div>
          ))}
        </div>
      </div>

      <div className="target-div-3">
        <div className="details-3">
          <h2>My Next Target</h2>
          <p>
            To advance your programming career, consider focusing on in-demand
            languages and technologies, specializing in a niche, or pursuing
            advanced roles like architect or product owner.
          </p>
        </div>
      </div>

      <div className="target-div-4">
        {Data2.map((element) => (
          <div id="parents-div-4">
            <div id="image-div-4">
              <img src={element.image} />
            </div>
            <div id="box-div-4">
              <h2>{element.title}</h2>
              <p id="p-div-4">{element.description}</p>
              <a className="a-tag-div-4">{element.tag}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TargetPage;
