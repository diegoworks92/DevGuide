interface InfoTextProps {
  heading?: string;
  description?: string;
}

const InfoText: React.FC<InfoTextProps> = ({ heading, description }) => {
  return (
    <div className="mt-10 mb-4 ">
      {heading && (
        <h2 className="scroll-mt-20 text-primary text-xl font-semibold mb-4 ">
          {heading}
        </h2>
      )}

      {description && (
        <p className="mt-2 text-gray-300 whitespace-pre-line rounded-lg border p-4  font-mono">
          {description}
        </p>
      )}
      <div className="h-6" />
    </div>
  );
};

export default InfoText;
