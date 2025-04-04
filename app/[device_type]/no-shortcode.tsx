
import FlamLogo from "@/components/logo";
import NotFound from "@/public/images/not-found.svg";

const NoShortcode = () => {
  return (
    <div className="p-4 h-full w-full">
      <div className="relative h-full w-full rounded-2xl bg-[#F4FED6] flex flex-col items-center justify-between shadow-md">
        <div className="flex flex-col items-center">
          <FlamLogo size="lg" color="#000" className="md:mt-16 mt-4" />
          <p className="text-2xl font-bold mt-12">Oh-Snap.</p>
          <p className="text-lg w-2/3 text-center md:w-full">
            The link you’re looking for does not exist.
          </p>
        </div>
        <img
          src={NotFound.src}
          alt="404"
          className="md:w-1/2"
        />
      </div>
    </div>
  );
};

export default NoShortcode;
