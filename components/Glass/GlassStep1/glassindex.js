import React from "react";
import Glassform from "./glassform";
import Glassdealsenergy from "./glassdealsenergy";
import Glasssubject from "./glass-subject";

function GlassIndex({setCount}) {
  return (
    <>
        <Glassform setCount={setCount} />
        <Glassdealsenergy />
        <Glasssubject />
    </>
  );
}

export default GlassIndex;
