import {px2rem} from "./helpers";

export const colors = {
  white: "#FFF",
  violet: "rgba(105,108,241, 1)",
  blue: "#002e5e",
  darkRed: "#6d3f4a",
  lightGray: "#f3f3f3",
  gray: "#C4C4C4",
  black: "#2D2D2D",
  darkGray: "#979797",
};

export const fontSizes = {
  base: px2rem(16),
  medium: px2rem(22),
  large: px2rem(28)
};

export const fontWeight = {
  thin: 200,
  base: 400,
  medium: 500,
  bold: 600,
  extraBold: 800
};

export const border = {
  small: px2rem(10),
  medium: px2rem(20),
};

export const margins = {
  small: px2rem(10),
  medium: px2rem(20)
};

export const paddings = {
  small: px2rem(10),
  medium: px2rem(20),
  big: px2rem(50)
};
