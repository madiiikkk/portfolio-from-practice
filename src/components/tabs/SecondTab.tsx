import React from "react";

function SecondTab({ translations }) {
  return (
    <div>
      <h2>{translations.secondTabTitle}</h2>
      <p>{translations.secondTabContent}</p>
    </div>
  );
}

export default SecondTab;
