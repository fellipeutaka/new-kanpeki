import { Geist } from "next/font/google";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const fonts = [sans.variable];
