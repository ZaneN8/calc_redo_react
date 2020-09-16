import React from "react";
import Button from "react-bootstrap/Button";

// HERE
// HERE
const Buttons = (handleClickProp) => {
  return (
    <>
      <Button size="lg">C</Button>
      <Button>?</Button>
      <Button>?</Button>
      <Button>÷</Button>
      <br />
      <Button>9</Button>
      <Button>8</Button>
      <Button>7</Button>
      <Button>x</Button>
      <br />
      <Button>6</Button>
      <Button value="5" onClick={(e) => handleClickProp(e.target.value)}>
        5
      </Button>
      <Button>4</Button>
      <Button>-</Button>
      <br />
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>+</Button>
      <br />
      <Button size="lr">0</Button>
      <Button>0</Button>
      <Button>.</Button>
      <Button>=</Button>
    </>
  );
};

export default Buttons;
