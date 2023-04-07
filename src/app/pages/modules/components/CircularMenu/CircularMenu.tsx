"use client";
import { IProps } from "./Interface";
import Logic from "./Logic";
import { IconContext } from "@react-icons/all-files/lib/esm/iconContext";
import { BiMenuAltRight } from "@react-icons/all-files/bi/BiMenuAltRight";

const CircularMenu = ({ children, className }: IProps) => {
  const { setShow, show } = Logic();

  return (
    <div className={`flex items-center w-3/6 ${className}`}>
      <div
        className="cursor-pointer absolute right-0 mr-4"
        onClick={() => setShow(!show)}
      >
        <IconContext.Provider value={{ style: { width: 40, height: 40 } }}>
          <BiMenuAltRight />
        </IconContext.Provider>
      </div>
      {show && children}
    </div>
  );
};

export default CircularMenu;
