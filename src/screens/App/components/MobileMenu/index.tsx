import { Button } from "../../../../components/ui/button";
interface Props {
  isNav: boolean;
  setIsNav: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function MobileMenu({ isNav, setIsNav }: Props) {
  return (
    <>
      <div
        className={`absolute ${
          isNav ? "right-0" : "right-[150%]"
        }  w-screen h-screen bg-black z-20 overflow-hidden transition-all duration-300 ease`}
      >
        <nav className="h-full">
          <ul className="h-full flex flex-col-reverse items-center py-10 justify-around bg-zinc-800">
            <li className="w-[80%]">
              <Button
                className="w-[100%]"
                onClick={() => setIsNav(false)}
                variant={"destructive"}
                size={"lg"}
              >
                Close
              </Button>
            </li>
            <li className="w-[80%]">
              <Button className="w-[100%]" variant={"secondary"} size={"lg"}>
                <a className="inline-block w-full " href="#">
                  About Us
                </a>
              </Button>
            </li>
            <li className="w-[80%]">
              <Button className="w-[100%]" variant={"secondary"} size={"lg"}>
                <a className="inline-block w-full" href="#">
                  Docs
                </a>
              </Button>
            </li>
            <li className="w-[80%]">
              <Button className="w-[100%]" variant={"secondary"} size={"lg"}>
                <a className="inline-block w-full" href="#">
                  Sign Up
                </a>
              </Button>
            </li>
            <li className="w-[80%]">
              <Button className="w-[100%]" variant={"secondary"} size={"lg"}>
                <a className="inline-block w-full" href="#">
                  Login
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
