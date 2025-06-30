import React from "react";

interface InfoTextProps {
  heading?: string;
  description?: string;
}

const InfoText: React.FC<InfoTextProps> = ({ heading, description }) => {
  return (
    <div className="mt-10 mb-4 ">
      {heading && (
        <h2 className="scroll-mt-20 text-[#4EC9B0] text-xl font-semibold mb-4 ">
          {heading}
        </h2>
      )}

      {description && (
        <p className="mt-2 text-gray-300 whitespace-pre-line">{description}</p>
      )}

      <div className="mt-4 border-t-1" />
    </div>
  );
};

export default InfoText;
