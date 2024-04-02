import React from 'react';

const Header = () => {
  const navigation = [
    { title: "About Me  //", path: "javascript:void(0)" },
    { title: "Blogs", path: "javascript:void(0)" },
    { title: "Drop an Email!", path: "javascript:void(0)" },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-white border-b-4 border-black md:static md:text-sm">
      <div className="items-center max-w-screen-md lg:mx-auto md:flex m-4 border-4 border-black shadow-[6px_6px_2px_rgba(0,0,0,0.25)]">
        <div className="flex items-center justify-start p-3 md:py-5 md:block md:border-r-4 md:border-black">
          <a href="javascript:void(0)" className="font-bold text-xl pr-20 pl-4">
            animeshghosh
          </a>
          <div className="md:hidden">
                <button className="menu-btn text-gray-400 hover:text-gray-300"
                    onClick={() => setIsOpen((open) => !open)}
                >
                    {
                        isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="black">
                                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )
                    }
                </button>
            </div>
        </div>
        <div className={`flex w-full pb-3 md:block md:pb-0 md:mt-0 px-4  ${isOpen ? '' : 'hidden'}`}>
          <ul className="justify-between space-y-6 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-gray-700 hover:text-indigo-600 px-3 text-base"
                >
                  <a href={item.path} className="block">
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
