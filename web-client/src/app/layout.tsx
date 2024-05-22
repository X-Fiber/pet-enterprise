"use client";

import "./globals.css";
import { initiator, setServices, setStorybooks } from "~packages";
import { eCat } from "~business-logic";
import { NextUiStorybook } from "~storybooks";
import { setClientType } from "~packages";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  setStorybooks([NextUiStorybook]);
  setServices([eCat]);
  setClientType("NextJS");

  initiator.start();

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
