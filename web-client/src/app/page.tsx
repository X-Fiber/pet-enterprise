'use client'

import {View} from "display";

export default function Home() {
  return (
        <>
          <View service={'E-Cat'} domain={'CatCatAgg'} view={'CreateForm'} />
          <View service={'E-Cat'} domain={'CatCatAgg'} view={'CatInfo'} />
        </>
  );
}
