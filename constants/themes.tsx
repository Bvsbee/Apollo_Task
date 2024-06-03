import { Theme } from "@react-navigation/native";

interface CustomColors {
  primary: string;
  background: string;
  card: string;
  text: string;
  border: string;
  notification: string;
  shadow: string;
}

interface CustomTheme extends Theme {
  colors: CustomColors;
}

export const darkTheme: CustomTheme = {
  dark: true,
  colors: {
    primary: "#615EFC",
    background: "#121212",
    card: "#202020",
    text: "#4a4e6f",
    border: "#202020",
    notification: "rgb(255, 69, 58)",
    shadow: "#fff",
  },
};

export const lightTheme: CustomTheme = {
  dark: false,
  colors: {
    primary: "#615EFC",
    background: "#ffffff",
    card: "#f2f2f2",
    text: "#4a4e6f",
    border: "#f2f2f2",
    notification: "rgb(255, 69, 58)",
    shadow: "#ddd",
  },
};

export const oledTheme: CustomTheme = {
  dark: true,
  colors: {
    primary: "#615EFC",
    background: "black",
    card: "black",
    text: "#4a4e6f",
    border: "#2c2d2e",
    notification: "rgb(255, 69, 58)",
    shadow: "#fff",
  },
};
