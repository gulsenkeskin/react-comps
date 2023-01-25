import React from "react";
import Accordion from "./components/Accordion";

function AccordionPage() {
  const items = [
    { id: 1, label: "Meyve", content: "elma,armut,portakal" },
    { id: 2, label: "Sebze", content: "enginar,karnabahar,brokoli" },
    {
      id: 3,
      label: "Unlu mamül",
      content: "kurabiye,kek,ekmek,simit",
    },
  ];

  return <Accordion items={items}></Accordion>;
}

export default AccordionPage;
