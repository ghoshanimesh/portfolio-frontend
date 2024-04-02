const Hero = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto px-4 py-14 gap-12 text-black md:px-8 xl:flex">
        {/* <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="rounded-lg"
              alt=""
            />
          </div>
        </div> */}
        <div className="space-y-5 max-w-2xl mx-auto text-left">
          <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start"></div>
          <h1 className="text-4xl text-white-600 font-extrabold mx-auto md:text-5xl">
            Hello,
            <br /> I am Animesh Ghosh.
          </h1>
          <p className="max-w-xl mx-auto md:mx-0 text-xl">
            Project Manager @ Microsoft, India. <br />
            Web Developer | Entrepreneur. <br />
          </p>
          <p className="max-w-xl mx-auto md:mx-0">
            Creating new solutions to complex problems while keeping users needs
            in mind, and transforming challenges into user-friendly solutions.
          </p>
          <div className="items-center justify-start gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-black font-medium bg-[#F4DFC8] duration-150 hover:bg-black hover:text-white active:bg-black active:text-white rounded-lg md:inline-flex"
            >
              LinkedIn
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-black font-medium bg-[#F4DFC8] duration-150 hover:bg-black hover:text-white active:bg-black active:text-white rounded-lg md:inline-flex"
            >
              Github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="javascript:void(0)"
              className="flex items-center justify-center gap-x-2 py-2 px-4 text-black font-medium bg-[#F4DFC8] duration-150 hover:bg-black hover:text-white active:bg-black active:text-white rounded-lg md:inline-flex"
            >
              Resume
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
