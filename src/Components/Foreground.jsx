import React, { useRef } from "react";
import Card from "../Components/Card";


const page = () => {

    const ref = useRef(null)

  const data = [
    {
      desc: "Lololo ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, consequuntur?",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "green" },
    },
    {
      desc: "Lololo ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, consequuntur?",
      filesize: ".9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagcolor: "red" },
    },
    {
      desc: "Lololo ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati, consequuntur?",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagcolor: "green" },
    },
  ]; 

  return (
    <div ref={ref} className="fixed z-[3] w-full h-screen top-0 left-0 flex gap-10 flex-wrap p-5">
      {data.map((item, idex)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
};

export default page;
