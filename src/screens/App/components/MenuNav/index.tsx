import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../../../components/ui/navigation-menu";
import { Button } from "../../../../components/ui/button";

export default function NavMenu() {
  interface itensLink {
    id: number;
    title: string;
    description: string;
  }
  const itensAbout: itensLink[] = [
    {
      id: 1,
      title: "About Us",
      description: "Discover our culture and work. Click to learn more.",
    },
    {
      id: 2,
      title: "Docs",
      description: "Read our docs for guides and tips. Click to get started.",
    },
    {
      id: 3,
      title: "Can't Connect Chatbot ?",
      description: "Read this guide for learn more tips. Click to get started.",
    },
  ];
  const itensAcc: itensLink[] = [
    {
      id: 1,
      title: "Sign Up",
      description: "Enter in Family, let's write together ",
    },
    {
      id: 2,
      title: "Login",
      description: "Welcome back! Come on, let's write",
    },
  ];

  return (
    <NavigationMenu className="hidden md:inline-block">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Button>Chat Bot</Button>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
            Getting Starter
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-3 md:w-[360px] lg:w-[360px] lg:grid-cols-[1fr]">
              {itensAbout &&
                itensAbout.map((x) => (
                  <NavigationMenuItem key={x.id}>
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className=" flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md hover:bg-zinc-200 transition-colors duration- ease-linear"
                          href="#"
                        >
                          <p>{x.title}</p>
                          <p className="text-sm leading-tight text-muted-foreground text-zinc-600">
                            {x.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </NavigationMenuItem>
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
            Enter in the Family
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-3 md:w-[360px] lg:w-[360px] lg:grid-cols-[1fr]">
              {itensAcc &&
                itensAcc.map((x) => (
                  <NavigationMenuItem key={x.id}>
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className=" flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-3 no-underline outline-none focus:shadow-md hover:bg-zinc-200 transition-colors duration- ease-linear"
                          href="#"
                        >
                          <p>{x.title}</p>
                          <p className="text-sm leading-tight text-muted-foreground text-zinc-600">
                            {x.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </NavigationMenuItem>
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
