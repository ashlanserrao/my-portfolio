import Image from 'next/image';

const Avatar = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block absolute right-[8%] top-1/2 -translate-y-1/2 z-20">
        <div className="bg-white rounded-xl p-1 shadow-md hover:shadow-black transition-all duration-300 w-[240px] xl:w-[300px]">
          <div className="w-full h-auto rounded-lg overflow-hidden">
            <Image
              src="/profileweb.png"
              alt="Profile"
              width={200}
              height={200}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden mt-10 mx-auto z-20 w-[180px]">
        <div className="bg-white rounded-xl p-1 shadow-md hover:shadow-black transition-all duration-300">
          <div className="w-full h-auto rounded-lg overflow-hidden">
            <Image
              src="/profileweb.png"
              alt="Profile"
              width={180}
              height={180}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Avatar;
