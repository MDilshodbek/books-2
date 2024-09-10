import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Facebook, Instagram, Languages, Search, Send } from "lucide-react";
import type { FC } from "react";
import { Button } from "../ui/button";

import React from "react";
import { Input } from "../ui/input";

const Navbar: FC = () => {
  const [language, setLanguage] = React.useState("Uz");

  return (
    <div className="w-[80%] m-auto flex flex-col gap-4">
      <div className="flex items-end justify-between h-[59px] w-full">
        <div className="flex items-end gap-[26px]">
          <img
            src={"icons/mainIcon.png"}
            alt="Logo"
            className="cursor-pointer"
          />
          <h3>Kitob - eng yaxshi sovg'a</h3>
          <Button className="flex items-end p-0" variant="link">
            Qanday xarid qilinadi?
          </Button>
        </div>
        <div className="flex gap-4 items-end">
          <AlertDialog>
            <AlertDialogTrigger className="rounded-md">
              <Button className="p-0 h-fit" variant="ghost">
                <Search className="w-[20px] h-[20px] p-0" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white rounded-md">
              <AlertDialogHeader>
                <AlertDialogTitle>Want to search book?</AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="flex w-full items-center space-x-2">
                    <Input type="search" placeholder="Search" />
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>search</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="p-0 border-none h-fit">
                <Languages />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Choose language</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup
                value={language}
                onValueChange={setLanguage}
              >
                <DropdownMenuRadioItem value="uz">Uz</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="ru">Ru</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="en">En</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="tel:+80827111" className="font-bold p-0">
            +821080827111
          </a>
          <Facebook className="cursor-pointer" />
          <Instagram className="cursor-pointer" />
          <Send className="cursor-pointer" />
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default Navbar;
