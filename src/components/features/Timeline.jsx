export default function Timeline() {
  const timelineData = [
    {
      title: "B.F.A in Department of Jewelry",
      date: "Augest 15, 2018",
      description:
        "B.F.A in Department of Jewelry Design Faculty of Decorative Art, Slipakorn University with 2nd Class Honor .",
    },
    {
      title: "Senior Jewelry Brand Designer",
      date: "March 29, 2023",
      description: "NGG Enterprise CO,LTD",
    },
    {
      title: "Diploma of Information Technology (Front End Web Development)",
      date: "Present",
      description: "First step, getting into the web development industry",
    },
  ];
  return (
    <div className="bg-black  flex flex-col items-center justify-center ">
      {" "}
      <ol className="items-center sm:flex">
        {timelineData.map((item, index) => (
          <li
            key={index}
            className="relative mb-6 max-w-[350px] h-[250px] sm:mb-0"
          >
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
