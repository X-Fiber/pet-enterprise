'use client'

import "./globals.css";
import {initiator, setServices, setStorybooks} from "~business-logic";
import {NextUiStorybook} from "~storybooks";
import {eCat} from "~business-logic";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    setStorybooks([NextUiStorybook])
    setServices([eCat])

    initiator.start()

  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
