import { useParams } from "@remix-run/react";
import Header from "./_index/Header";
import Footer from "./_index/Footer";

const Post = () => {
  const postId = useParams();
  console.log(postId["post-id"]);

  const learnings = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing.",
  ];

  const overview = [
    { heading: "Text Textdata1", data: ["New 1", "New 2", "New 3", "New 4"] },
    { heading: "Text Textdata2", data: ["New 1", "New 2", "New 3"] },
    {
      heading: "Text Textdata3",
      data: ["New 1", "New 2", "New 3", "New 4"],
    },
  ];


  return (
    <div>
      <Header></Header>
      <section>
        <div className="max-w-screen-xl mx-auto px-4 py-14 gap-12 text-black md:px-8 xl:flex">
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Blog Img, Blog Title, Blog Subtitle, Blog Tags */}
            <div>
              <img
                src="https://source.unsplash.com/6uAssP0vuPs"
                alt="New Blog Image"
                className="w-full h-1/3 mb-4 rounded-lg mx-auto"
              />
              <h1 className="text-2xl text-white-600 font-extrabold mx-auto md:text-4xl text-left">
                Ideating and MVP - Travel.ly
              </h1>
              <p className="mt-1 text-left">
                This is aimed at a 2 liner sub title on the blog which it is
                aimed at and its incredibly big.
              </p>
              <div className="mt-1 justify-between">
                {["New Project", "UX", "UI", "Research"].map((tag) => {
                  return (
                    <span className="m-1 inline-flex items-center justify-center rounded-xl border border-black px-2.5 py-0.5">
                      {tag}
                    </span>
                  );
                })}
                <span className="m-1 inline-flex items-center justify-center rounded-xl border border-black px-2.5 py-0.5">
                  Paid Membership
                </span>
              </div>
            </div>
            {/* Blog Intro, Overview and Learnings */}
            <div className="text-justify">
              <h2 className="text-lg font-bold">Introduction</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Sem
                integer vitae justo eget magna fermentum iaculis. Egestas diam
                in arcu cursus euismod quis. Consectetur adipiscing elit duis
                tristique. Scelerisque varius morbi enim nunc faucibus a
                pellentesque sit amet. Sed cras ornare arcu dui vivamus arcu
                felis bibendum.
              </p>
              <div className="bg-black rounded-lg mt-4 text-white px-6 py-4">
                <ul className="space-y-1 text-gray-500 list-inside text-white">
                  {learnings.map((learning) => (
                    <li className="flex items-center p-2 gap-4">
                      <svg
                        className="w-3.5 h-3.5 me-2 text-green-500 flex-shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                      </svg>
                      {learning}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex grid grid-cols-1 md:grid-cols-3 gap-3">
                {overview.map((obj) => (
                  <div className="bg-gray-300 rounded p-6 pl-8 group">
                    <div className="flex justify-between">
                      <p className="font-bold">{obj.heading}</p>
                      <svg
                        className="rotate-0 group-hover:rotate-45 transform duration-500 scale-150"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                      </svg>
                    </div>
                    <ul className="flex flex-col bg-gray-300 pl-2 pt-2">
                      {obj.data.map((dataitem) => (
                        <li className="border-gray-400 flex flex-row mb-2 items-center">
                          <svg
                            className="w-3.5 h-3.5 me-2 text-black flex-shrink-0"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                          </svg>
                          {dataitem}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            {/* Blog Data */}
            <div>This is blog data area</div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Post;

/*
Sort by Posted Date
Filter by Status = Done
Blog ID

Blog Title
Blog SubTitle
Blog Intro
Blog Tags
Blog Learnings/Impact Section
Blog Project Overview - Toggle List - Iterate. Each main heading will form a different block.
Blog Image

In Loop
    Header - H1
    Image with caption
    In loop
        Text - Data / Paragraphs
    Numbered Bullets - Numbered list
    Web Bookmark - URL
    Embed - Need to think how to style. Will style on the go
    Code - As a code snippet
    2 Column retrieve as columns and style it based on the others 
Loop ends

Highlight Section - In Loop
    Text
    Img
Loop ends
*/
