export default function Timeline() {
  const timelineData = [
    {
      title: "Flowbite Library v1.0.0",
      date: "Released on December 2, 2021",
      description:
        "Get started with dozens of web components and interactive elements.",
    },
    {
      title: "React v18 Released",
      date: "Released on March 29, 2022",
      description:
        "React 18 introduces concurrent rendering and automatic batching.",
    },
    {
      title: "Tailwind CSS v3.0",
      date: "Released on December 9, 2021",
      description:
        "New Just-in-Time engine, arbitrary values, and enhanced performance.",
    },
  ];
  return (
    <div className="bg-black  flex flex-col items-center justify-center ">
      {" "}
      <ol className="items-center sm:flex">
        {timelineData.map((item, index) => (
          <li key={index} className="relative mb-6 sm:mb-0">
            <div className="flex pt-5 items-center">
              <div className="z-10 flex items-center justify-center w-1 h-1 bg-fuchsia-50 rounded-full ring-0 ring-fuchsia-200 dark:bg-black sm:ring-8 dark:ring-gray-100 shrink-0"></div>
              <div className="hidden sm:flex w-full bg-fuchsia-200 h-0.5"></div>
            </div>
            <div className="mt-4 p-2 sm:pe-8">
              <p className="text-lg font-main text-fuchsia-100 dark:text-white">
                {item.title}
              </p>
              <time className="block mb-2 font-main text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.date}
              </time>
              <p className="text-base font-normal font-main text-gray-500 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
