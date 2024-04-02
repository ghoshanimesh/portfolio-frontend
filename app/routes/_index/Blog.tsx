const Blog = () => {
  const features = [
    {
      img: "https://source.unsplash.com/N_xjrdKZPkw",
      title: "Wait-list Digital Wellbeing",
      subtitle:
        "A new way of meaningful socialization solution to promote and track digital detox",
      category: "Product / UX",
      subcategory: "App Design",
      tags: ["UX Research", "User Interview", "Figma"],
    },
    {
      img: "https://source.unsplash.com/Jz07Fw20_lw",
      title: "Wait-list Digital",
      subtitle:
        "A new way of meaningful socialization in a way has to be 2 line",
      category: "User Design",
      subcategory: "Web Design",
      tags: ["UX", "UI", "Figma"],
    },
    {
      img: "https://source.unsplash.com/N_xjrdKZPkw",
      title: "Wait-list Digital Wellbeing",
      subtitle:
        "A new way of meaningful socialization solution to promote and track digital detox",
      category: "Product / UX",
      subcategory: "App Design",
      tags: ["UX Research", "User Interview", "Figma"],
    },
    {
      img: "https://source.unsplash.com/N_xjrdKZPkw",
      title: "Wait-list Digital Wellbeing",
      subtitle:
        "A new way of meaningful socialization solution to promote and track digital detox",
      category: "Product / UX",
      subcategory: "App Design",
      tags: ["UX Research", "User Interview", "Figma"],
    },
    {
      img: "https://source.unsplash.com/N_xjrdKZPkw",
      title: "Wait-list Digital Wellbeing",
      subtitle:
        "A new way of meaningful socialization solution to promote and track digital detox",
      category: "Product / UX",
      subcategory: "App Design",
      tags: ["UX Research", "User Interview", "Figma"],
    },
    {
      img: "https://source.unsplash.com/N_xjrdKZPkw",
      title: "Wait-list Digital Wellbeing",
      subtitle:
        "A new way of meaningful socialization solution to promote and track digital detox",
      category: "Product / UX",
      subcategory: "App Design",
      tags: ["UX Research", "User Interview", "Figma"],
    },
    {
      img: "https://source.unsplash.com/N_xjrdKZPkw",
      title: "Wait-list Digital Wellbeing",
      subtitle:
        "A new way of meaningful socialization solution to promote and track digital detox",
      category: "Product / UX",
      subcategory: "App Design",
      tags: ["UX Research", "User Interview", "Figma"],
    },
    {
      img: "https://source.unsplash.com/N_xjrdKZPkw",
      title: "Wait-list Digital Wellbeing",
      subtitle:
        "A new way of meaningful socialization solution to promote and track digital detox",
      category: "Product / UX",
      subcategory: "App Design",
      tags: ["UX Research", "User Interview", "Figma"],
    },
    {
      img: "https://source.unsplash.com/N_xjrdKZPkw",
      title: "Wait-list Digital Wellbeing",
      subtitle:
        "A new way of meaningful socialization solution to promote and track digital detox",
      category: "Product / UX",
      subcategory: "App Design",
      tags: ["UX Research", "User Interview", "Figma"],
    },
  ];

  
  return (
    <section className="container mx-auto p-10 md:py-20 px-0 md:p-10">
      <section className="p-5 md:p-0 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
        {features.map((feature) => {
          return (
            <article className="group hover:scale-105 border-2 border-black md:py-8 md:px-12 px-6 py-4 min-h-116 max-w-xl w-full bg-transparent rounded-xl text-black transform duration-500 hover:-translate-y-1 cursor-pointer">
              <h1 className="my-3 text-2xl md:text-3xl font-light leading-snug min-h-33 group-hover:scale-105 transform duration-500">
                {feature.title}
              </h1>
              <p className="border-black border-b pb-2 text-md group-hover:scale-105 transform duration-500">
                {feature.subtitle}
              </p>
              <img
                src={feature.img}
                alt=""
                className="my-8 rounded-lg group-hover:scale-105 transform duration-500 w-full h-64 object-cover"
              />
              <div className="mt-4 pb-4 flex items-center justify-between border-black border-b">
                <div className="grid grid-rows-1">
                  <span className="p-3 pb-0 pl-0 text-lg group-hover:scale-105 transform duration-500">
                    {feature.category}
                  </span>
                  <span className="p-3 pt-0 pl-0 text-sm group-hover:scale-105 transform duration-500">
                    {feature.subcategory}
                  </span>
                </div>
                <span className="scale-150 p-3 transform duration-500 rotate-0 group-hover:rotate-45  border-2 border-white rounded-md text-base">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </span>
              </div>
              <div className="mt-4 justify-between">
                {feature.tags.map((tag) => {
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
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default Blog;
