import React from "react";

const Lname = () => {
  // Spliting name and making its array
  const lName = "Bisht";
  const lNameArr = lName.split("");

  return (
    <div className="lName">
      {lNameArr.map((span, index) => {
        return (
          <span className="lNameSpan" key={index}>
            {span}
          </span>
        );
      })}
    </div>
  );
};

export default Lname;
