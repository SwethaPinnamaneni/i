import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </Button>
      {count}
    </div>
  );
};
