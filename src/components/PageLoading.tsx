import HashLoader from "react-spinners/HashLoader";

export default function PageLoading(props: { loading?: boolean }) {
  return (
    <>
      {props.loading && (
        <div className="w-full min-h-screen right-0 left-0 bottom-0 flex justify-center items-center fixed bg-gray-900 opacity-[96%] z-[999999]">
          <div className="loading-box flex gap-4 items-center">
            <HashLoader size={32} color="white" />
            <p className="text-white text-[2rem]">Minting...</p>
          </div>
        </div>
      )}
    </>
  );
}
