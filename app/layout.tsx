import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import {ReactNode } from "react";


const ibmPlexSans = localFont({
    src: [
        {path: './fonts/IBMPlexSans-Regular.ttf', weight:'400', style: "normal"},
        {path: './fonts/IBMPlexSans-Medium.ttf', weight:'500', style: "normal"},
        {path: './fonts/IBMPlexSans-SemiBold.ttf', weight:'600', style: "normal"},
        {path: './fonts/IBMPlexSans-Bold.ttf', weight:'700', style: "normal"},
    ],
    variable: "--ibmplex-sans",

});

const bebasNeue = localFont({
    src: [
        {path: './fonts/BebasNeue-Regular.ttf', weight:'400', style: "normal"},
    ],
    variable: "--bebas-neue",
});

export const metadata: Metadata = {
  title: "Library Management System",
  description: "Library Management System is a book borrowing university library management solutions",
};

const RootLayout =({children}: { children: ReactNode })=> {
  // @ts-ignore
    // @ts-ignore
    return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable}  ${ibmPlexSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

export default RootLayout