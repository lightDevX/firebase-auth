import { CiBookmark, CiShare2 } from "react-icons/ci";
import { useLoaderData } from "react-router";

const CategoryNews = () => {
  const { data } = useLoaderData();
  const newsData = data;

  console.log(newsData);

  return (
    <div>
      <h2>{newsData.length} News in this category</h2>
      <div>
        <div className="mx-auto flex w-10/12 items-center justify-between">
          <div className="h-10 w-10">
            <img
              src="../../src/assets/media/images/demo-user.png"
              alt="User"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex justify-between gap-3 *:items-center">
            <CiBookmark className="h-6 w-6" />
            <CiShare2 className="h-6 w-6" />
          </div>
        </div>
        <div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryNews;
