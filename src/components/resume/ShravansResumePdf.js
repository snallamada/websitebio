import React from 'react';

const ShravansResumePdf = ({buttonText}) => {
  const pdfPath = process.env.PUBLIC_URL + './ShravansResume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'ShravansResume.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <button
        className="w-full h-12 bg-[#141518] rounded-lg text-base text-red-400 tracking-wider hover:text-white duration-300 hover:border-[1px] hover:border-design color border-transparent"
        onClick={handleDownload}
      >
        {buttonText || 'Download Resume'}
      </button>

  );
};

export default ShravansResumePdf;
