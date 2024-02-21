"use client";

import Image from "next/image";
import Link from "next/link";

import * as React from "react"
 
import { cn, scrolltoHash } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
 
import useScroll from "@/lib/hooks/use-scroll";
import { ModeToggle } from "../dark-toggle";
import { Button } from "../ui/button";
import { useContactForm } from "@/app/context/contact-form-context";


const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]
 

export default function NavBar() {
  const scrolled = useScroll(50);

  const [contactMeDialog, setContactMeDialog] = useContactForm();


  return (
    <NavigationMenu   className={`fixed top-0 min-w-full flex justify-center ${
      scrolled
        ? "border-b border-gray-600 bg-black/50 backdrop-blur-xl"
        : "bg-white/0"
    } z-30 transition-all`}>

<Link href="/" className="flex items-center font-display text-xl p-2">
            {/* <Image
              src="/logo.png"
              alt="Cold Plunge Logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image> */}
            <p className='bold'>QBV1</p>
          </Link>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-lg font-medium">
                      QBV1
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Product Engineering.  0 to 1 Design and Development
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/new-venture-warmup" title="New Venture Warmup">
                Technical SEO Planning and Setup for salvagable domains
              </ListItem>
              <ListItem href="/next-js-developer" title="Web Development">
                Custom NextJS Builds
              </ListItem>
              <ListItem href="/niche-tools-for-seo" title="Niche Tools">
                Custom niche components designed for linkability, user signal and SEO
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem >

        <Button className={navigationMenuTriggerStyle()} onClick={()=>setContactMeDialog(true)} variant="link">Contact Me</Button>
     
        </NavigationMenuItem>
        <NavigationMenuItem >
        <NavigationMenuItem >
        <Button className={navigationMenuTriggerStyle()} onClick={()=>scrolltoHash('faqs')} variant="link">Faqs</Button>
        </NavigationMenuItem>
        </NavigationMenuItem>
      </NavigationMenuList>



     <div className='ml-auto'>

     </div>
        <ModeToggle  />

    </NavigationMenu>
  )

}



const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"