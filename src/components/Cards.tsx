import { useState } from "react";
import { Button } from "./ui/button";

import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const colorOptions = [
  { name: "Black", color: "bg-black", text: "text-white" },
  { name: "Brown", color: "bg-[#964B00]", text: "text-white" },
  { name: "Red", color: "bg-[#FF0000]", text: "text-white" },
  { name: "Orange", color: "bg-[#FFA500]", text: "text-white" },
  { name: "Yellow", color: "bg-[#FFFF00]", text: "text-black" },
  { name: "Green", color: "bg-[#008000]", text: "text-white" },
  { name: "Blue", color: "bg-[#0000FF]", text: "text-white" },
  { name: "Violet", color: "bg-[#7F00FF]", text: "text-white" },
  { name: "Gray", color: "bg-[#808080]", text: "text-white" },
  { name: "White", color: "bg-white", text: "text-black" },
  { name: "Gold", color: "bg-[#EFBF04]", text: "text-white" },
  { name: "Silver", color: "bg-[#C0C0C0]", text: "text-white" },
];

function ColorDropdown({
  label,
  bandIdx,
  isFourBands,
}: {
  label: string;
  bandIdx: number;
  isFourBands: boolean;
}) {
  const [selectedColor, setSelectedColor] = useState<string>(label);

  const handleSelect = (colorName: string) => {
    if (selectedColor === colorName) {
      alert(`You clicked on the same color: ${colorName}`);
    } else {
      setSelectedColor(colorName);
    }
  };

  const filteredOptionsFourBands =
    bandIdx <= 1
      ? colorOptions.filter((c) => c.name !== "Gold" && c.name !== "Silver")
      : colorOptions;
  const filteredOptionsFiveBands =
    bandIdx <= 2
      ? colorOptions.filter((c) => c.name !== "Gold" && c.name !== "Silver")
      : colorOptions;

  const filteredOptions = isFourBands
    ? filteredOptionsFourBands
    : filteredOptionsFiveBands;

  const selected = colorOptions.find((c) => c.name === selectedColor) || {
    color: "bg-white",
    text: "text-black",
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className={`flex-1 min-w-0 ${selected.color} ${selected.text}`}>
          {selectedColor}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-53" align="start">
        <DropdownMenuLabel className="text-center font-semibold">
          COLORS
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          {filteredOptions.map((color) => (
            <DropdownMenuItem
              key={color.name}
              className={`${color.color} ${color.text}`}
              onClick={() => handleSelect(color.name)}
            >
              {color.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function FourBandsCard() {
  return (
    <Card className="mt-[30px]">
      <CardTitle className="text-[#1E3FE0] font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] text-center">
        RESISTOR CALCULATOR (FOUR BANDS)
      </CardTitle>
      <CardContent className="flex flex-row items-center gap-x-2 sm:gap-x-4 md:gap-x-8 mt-[30px] w-full">
        <ColorDropdown label="1st Band" bandIdx={0} isFourBands={true} />
        <ColorDropdown label="2nd Band" bandIdx={1} isFourBands={true} />
        <ColorDropdown label="3rd Band" bandIdx={2} isFourBands={true} />
        <ColorDropdown label="4th Band" bandIdx={3} isFourBands={true} />
      </CardContent>
      <CardFooter className="mt-[30px] text-[35px] font-bold font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px]">
        Results
      </CardFooter>
    </Card>
  );
}

export function FiveBandsCard() {
  return (
    <Card>
      <CardTitle className="text-[#1E3FE0] font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] text-center">
        RESISTOR CALCULATOR (FIVE BANDS)
      </CardTitle>
      <CardContent className="flex flex-row items-center gap-x-2 sm:gap-x-4 md:gap-x-8 mt-[30px] w-full">
        <ColorDropdown label="1st Band" bandIdx={0} isFourBands={false} />
        <ColorDropdown label="2nd Band" bandIdx={1} isFourBands={false} />
        <ColorDropdown label="3rd Band" bandIdx={2} isFourBands={false} />
        <ColorDropdown label="4th Band" bandIdx={3} isFourBands={false} />
        <ColorDropdown label="5th Band" bandIdx={4} isFourBands={false} />
      </CardContent>
    </Card>
  );
}
