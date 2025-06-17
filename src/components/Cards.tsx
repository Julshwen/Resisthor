import { useState } from "react";
import { Button } from "./ui/button";

import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";

import { colorOptions } from "../data/colorOptions";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

function ColorDropdown({
  label,
  bandIdx,
  isFourBands,
  onSelect,
}: {
  label: string;
  bandIdx: number;
  isFourBands: boolean;
  onSelect: (bandIdx: number, colorName: string) => void;
}) {
  const [selectedColor, setSelectedColor] = useState<string>(label);

  const handleSelect = (colorName: string) => {
    if (selectedColor === colorName) {
      alert(`You clicked on the same color: ${colorName}`);
    } else {
      setSelectedColor(colorName);
      onSelect(bandIdx, colorName);
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
  const bandLabels = ["1st Band", "2nd Band", "3rd Band", "4th Band"];

  const [bandColors, setBandColors] = useState(["", "", "", ""]);

  const handleColorChange = (bandIdx: number, colorName: string) => {
    const newColors = [...bandColors];
    newColors[bandIdx] = colorName;
    setBandColors(newColors);
  };

  const calculateResistance = () => {
    const colors = bandColors.map((name) =>
      colorOptions.find((c) => c.name === name)
    );

    const [band1, band2, multiplierBand, toleranceBand] = colors;

    if (band1 && band2 && multiplierBand && toleranceBand) {
      const value =
        (band1.value! * 10 + band2.value!) * multiplierBand.multiplier!;
      const tolerance = toleranceBand.tolerance!;
      return { value, tolerance };
    }

    return { value: null, tolerance: null };
  };

  const result = calculateResistance();

  return (
    <Card className="mt-[30px]">
      <CardTitle className="text-[#2323FF] font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] text-center">
        RESISTOR CALCULATOR (FOUR BANDS)
      </CardTitle>
      <CardContent className="flex flex-row items-center gap-x-2 sm:gap-x-4 md:gap-x-8 mt-[30px] w-full">
        {bandLabels.map((label, index) => (
          <ColorDropdown
            key={index}
            label={label}
            bandIdx={index}
            isFourBands={true}
            onSelect={handleColorChange}
          />
        ))}
      </CardContent>
      <CardFooter className="mt-[30px] flex flex-col gap-3 items-center text-black font-bold font-mono text-center">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px]">
          RESULTS
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Resistance:{" "}
          <span className="text-[#39FF14]">
            {result.value !== null
              ? `${result.value.toLocaleString()} Ω`
              : "N/A"}
          </span>
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Tolerance:{" "}
          <span className="text-[#39FF14]">{result.tolerance ?? "N/A"}</span>
        </div>
      </CardFooter>
    </Card>
  );
}

export function FiveBandsCard() {
  const bandLabels = [
    "1st Band",
    "2nd Band",
    "3rd Band",
    "4th Band",
    "5th Band",
  ];

  const [bandColors, setBandColors] = useState(["", "", "", "", ""]);

  const handleColorChange = (bandIdx: number, colorName: string) => {
    const newColors = [...bandColors];
    newColors[bandIdx] = colorName;
    setBandColors(newColors);
  };

  const calculateResistance = () => {
    const colors = bandColors.map((name) =>
      colorOptions.find((c) => c.name === name)
    );

    const [band1, band2, band3, multiplierBand, toleranceBand] = colors;

    if (band1 && band2 && band3 && multiplierBand && toleranceBand) {
      const value =
        (band1.value! * 100 + band2.value! * 10 + band3.value!) *
        multiplierBand.multiplier!;
      const tolerance = toleranceBand.tolerance!;
      return { value, tolerance };
    }
    return { value: null, tolerance: null };
  };

  const result = calculateResistance();

  return (
    <Card>
      <CardTitle className="text-[#2323FF] font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px] text-center">
        RESISTOR CALCULATOR (FIVE BANDS)
      </CardTitle>
      <CardContent className="flex flex-row items-center gap-x-2 sm:gap-x-4 md:gap-x-8 mt-[30px] w-full">
        {bandLabels.map((label, index) => (
          <ColorDropdown
            key={index}
            label={label}
            bandIdx={index}
            isFourBands={false}
            onSelect={handleColorChange}
          />
        ))}
      </CardContent>
      <CardFooter className="mt-[30px] flex flex-col gap-3 items-center text-black font-bold font-mono text-center">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[30px]">
          RESULTS
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Resistance:{" "}
          <span className="text-[#39FF14]">
            {result.value !== null
              ? `${result.value.toLocaleString()} Ω`
              : "N/A"}
          </span>
        </div>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          Tolerance:{" "}
          <span className="text-[#39FF14]">{result.tolerance ?? "N/A"}</span>
        </div>
      </CardFooter>
    </Card>
  );
}
