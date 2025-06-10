import { Button } from "./ui/button";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function FourBandsCard() {
  return (
    <Card className="mt-[30px]">
      <CardTitle className="text-[#1E3FE0] font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] text-center">
        RESISTOR CALCULATOR (FOUR BANDS)
      </CardTitle>
    </Card>
  );
}

export function FiveBandsCard() {
  return (
    <Card>
      <CardTitle className="text-[#1E3FE0] font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] text-center">
        RESISTOR CALCULATOR (FIVE BANDS)
      </CardTitle>
    </Card>
  );
}
