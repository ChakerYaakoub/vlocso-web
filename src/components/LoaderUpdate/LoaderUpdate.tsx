const LoaderUpdate = () => {
  return (
    <div
      // pl-0 lg:pl-72.5
      className="fixed inset-0 z-9999 flex justify-center items-center w-full h-full  bg-opacity-50 "
      style={{ backgroundColor: "#000000a6" }}
    >
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
  );
};

export default LoaderUpdate;
