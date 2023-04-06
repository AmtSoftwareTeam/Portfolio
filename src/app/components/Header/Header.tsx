import { IProps } from "./Interface";
import { classButtonHeader } from "./Logic";
import Button from "../Button/Button";
import Image from "next/image";
import CircularMenu from "../CircularMenu/CircularMenu";

const Header = ({ children }: IProps) => {
  return (
    <>
      <header className="mb-1 p-2">
        <nav className="flex items-center justify-between p-4 rounded-2xl shadow-xl">
          <Image
            src={"logo.svg"}
            alt="Logo AMT"
            width={30}
            height={30}
            className="bg-transparent"
          />
          <CircularMenu>
            <ul className="flex justify-around items-center md:w-2/4">
              <Button className={classButtonHeader}>
                <>
                  About <span className="hidden md:inline">us</span>
                </>
              </Button>
              <Button className={classButtonHeader}>Integrants</Button>
              <Button className={classButtonHeader}>Projects</Button>
              <Button className={classButtonHeader}>
                <>
                  Contact <span className="hidden md:inline">us</span>
                </>
              </Button>
            </ul>
          </CircularMenu>
        </nav>
      </header>
      {children}
    </>
  );
};

export default Header;
