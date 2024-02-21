import React from "react";
import WeAreHereToHelp from "../../components/WeAreHereToHelp";
import OurLocation from "../../components/OurLocation";
import SendUsaMessage from "../../components/SendUsaMessage";
const page = () => {
  return (
    <div>
      <WeAreHereToHelp />
      <OurLocation />
      <SendUsaMessage />
    </div>
  );
};

export default page;
