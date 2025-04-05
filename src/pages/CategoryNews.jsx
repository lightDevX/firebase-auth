import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router";

const CategoryNews = () => {
  const { data } = useLoaderData();
  const newsData = data;

  console.log(newsData);

  return (
    <div className="mx-auto w-10/12">
      <h2>{newsData.length} News in this category</h2>
      {newsData.map((news) => (
        <div
          key={news._id}
          className="mt-2.5 flex flex-col rounded-2xl border border-neutral-200 p-6"
        >
          <div className="flex items-center justify-between bg-neutral-200 px-5 py-3.5">
            <div className="h-10 w-10">
              <img
                src={news.image_url}
                alt="User"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div className="flex justify-between gap-3 *:items-center">
              <CiBookmark className="h-6 w-6" />
              <CiShare2 className="h-6 w-6" />
            </div>
          </div>
          <h1 className="my-5 px-5 text-2xl font-bold text-neutral-900">
            {news.title}
          </h1>
          <div className="my-6 h-full w-full px-5">
            <img
              src={news.thumbnail_url}
              alt="News Banner"
              className="h-full w-full rounded-2xl object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="mb-5 px-5 text-neutral-900">
            {news.details.slice(0, 200)} ... {""}
            <span className="text-red-400">Read More </span>
          </p>

          <div className="px-5 outline outline-amber-100"></div>

          <div className="flex items-center justify-between px-5 py-3.5">
            <div>
              <FaStar></FaStar>
            </div>
            <div>
              <FaEye></FaEye>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryNews;
