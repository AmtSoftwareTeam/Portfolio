"use client";
import { useState } from "react";

const Logic = () => {
  const [show, setShow] = useState(false);

  return { show, setShow };
};

export default Logic;
