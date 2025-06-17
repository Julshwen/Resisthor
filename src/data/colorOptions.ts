export type colorOptions = {
  name: string;
  color: string;
  text: string;
  value?: number;
  multiplier?: number;
  tolerance?: string;
};

export const colorOptions = [
  {
    name: "Black",
    color: "bg-black",
    text: "text-white",
    value: 0,
    multiplier: 1,
    tolerance: "0%",
  },
  {
    name: "Brown",
    color: "bg-[#964B00]",
    text: "text-white",
    value: 1,
    multiplier: 10,
    tolerance: "1%",
  },
  {
    name: "Red",
    color: "bg-[#FF0000]",
    text: "text-white",
    value: 2,
    multiplier: 100,
    tolerance: "2%",
  },
  {
    name: "Orange",
    color: "bg-[#FFA500]",
    text: "text-white",
    value: 3,
    multiplier: 1000,
    tolerance: "3%",
  },
  {
    name: "Yellow",
    color: "bg-[#FFFF00]",
    text: "text-black",
    value: 4,
    multiplier: 10000,
    tolerance: "4%",
  },
  {
    name: "Green",
    color: "bg-[#008000]",
    text: "text-white",
    value: 5,
    multiplier: 100000,
    tolerance: "0.5%",
  },
  {
    name: "Blue",
    color: "bg-[#0000FF]",
    text: "text-white",
    value: 6,
    multiplier: 1000000,
    tolerance: "0.25%",
  },
  {
    name: "Violet",
    color: "bg-[#7F00FF]",
    text: "text-white",
    value: 7,
    multiplier: 10000000,
    tolerance: "0.10%",
  },
  {
    name: "Gray",
    color: "bg-[#808080]",
    text: "text-white",
    value: 8,
    multiplier: 100000000,
    tolerance: "0.05%",
  },
  {
    name: "White",
    color: "bg-white",
    text: "text-black",
    value: 9,
    multiplier: 1000000000,
    tolerance: "0%",
  },
  {
    name: "Gold",
    color: "bg-[#EFBF04]",
    text: "text-white",
    multiplier: 0.1,
    tolerance: "5%",
  },
  {
    name: "Silver",
    color: "bg-[#C0C0C0]",
    text: "text-white",
    multiplier: 0.01,
    tolerance: "10%",
  },
];
