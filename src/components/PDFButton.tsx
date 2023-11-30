import React from "react";

interface PDFButtonProps {
  pdfUrl: string;
  title: string;
  image: string;
}

const PDFButton: React.FC<PDFButtonProps> = ({ pdfUrl, title, image }) => {
  const openPDF = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    <div
      className="container mx-auto h-92 w-56 cursor-pointer transform transition-transform hover:scale-105"
      onClick={openPDF}
    >
      <div className=" bg-neutral-200 rounded-lg">
        <div className=" h-72">
          <div className=" w-full h-full flex">
            <img
              className="object-cover rounded-tl-md rounded-tr-md w-full h-full"
              src={image}
            />
          </div>
        </div>
        <h2 className="p-2 text-sm text-center font-extrabold">{title}</h2>
      </div>
      <button
        className=" bg-greenEduard/70 hover:bg-green-900 py-1 px-6 w-full mt-1 rounded-full text-xs text-white hover:text-lime-300"
        onClick={openPDF}
      >
        Abrir PDF
      </button>
    </div>
  );
};

export default PDFButton;
