import Title from "./Title";

const NotFound = () => {
  return (
    <>
      <Title name="404!" />
      <div className="flex justify-center bg-gray-800 text-white p-4 my-2 w-full max-w-full sm:max-w-3xl rounded-lg overflow-x-auto">
        <p className="text-xl text-gray-400">
          Oops! The page you're looking for doesn't exist.
        </p>
      </div>
    </>
  );
};

export default NotFound;
