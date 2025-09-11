import React from "react";

const Achievement = () => {
  return (
    <>
      <section className="relative bg-center bg-no-repeat overflow-hidden">
        {/* <video
          src={achievementVideo}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-md"
        /> */}
        
        <div className="relative px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56 z-10">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Lets Share Our Achievements With The World
          </h1>
          <p className="mb-8 text-lg font-normal text-white -300 lg:text-xl sm:px-16 lg:px-48">
           Together we serve, together we shine — making hope a reality
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Donate for a cause
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

    {/* Impact Acheieved */}
    <section className="py-12 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">Our Impact</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Impact"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Over the past year, Wawa Cooperation Club has made significant strides in improving the lives of orphans and supporting local communities. We have successfully organized over 10 community events, raising more than $50,000 for healthcare and educational initiatives. Our partnerships with local organizations have enabled us to share resources effectively, ensuring that our efforts lead to sustainable change. Through our collective dedication, we have empowered numerous orphans to pursue their dreams and contribute positively to society.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Achievement;
