import { Advent_Pro } from "next/font/google";
import { Montserrat } from "next/font/google";

import { Alegreya } from "next/font/google";

const adventPro = Advent_Pro({ subsets: ["latin"] });

const montserrat = Montserrat({ subsets: ["latin"] });
const alegreya = Alegreya({
  subsets: ["latin"],
  style: ["italic", "normal"]
});

export const fonts = {
  adventPro,
  montserrat,
  alegreya
};
