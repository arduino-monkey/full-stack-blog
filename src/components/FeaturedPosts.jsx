import Image from "./Image";
import { Link } from "react-router-dom";

const FeaturedPosts = () => {
  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/*First Post*/}
      <div className="flex flex-col w-full lg:w-1/2 gap-4">
        <Image
          src="featured1.jpeg"
          className="rounded-3xl object-cover aspect-video"
        />
        {/*Details*/}
        <div className="flex gap-4 items-center">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link to="posts?cat=web-design" className="text-blue-800">
            Web Design
          </Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/*Title*/}
        <Link
          to="/testPost"
          className="font-semibold text-xl lg:text-3xl lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quas
          odio delectus.
        </Link>
      </div>
      {/*Other Featured Posts*/}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured1.jpeg"
              className="rounded-3xl object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3">
            {/*Details*/}
            <div className="flex gap-4 items-center text-sm lg:text-base mb-4">
              <h1 className="font-semibold">01.</h1>
              <Link to="posts?cat=web-design" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/*Title*/}
            <Link
              to="/testPost"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quas odio delectus.
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured1.jpeg"
              className="rounded-3xl object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3">
            {/*Details*/}
            <div className="flex gap-4 items-center text-sm lg:text-base mb-4">
              <h1 className="font-semibold">01.</h1>
              <Link to="posts?cat=web-design" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/*Title*/}
            <Link
              to="/testPost"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quas odio delectus.
            </Link>
          </div>
        </div>
        <div className="lg:h-1/3 flex justify-between gap-4">
          <div className="w-1/3 aspect-video">
            <Image
              src="featured1.jpeg"
              className="rounded-3xl object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3">
            {/*Details*/}
            <div className="flex gap-4 items-center text-sm lg:text-base mb-4">
              <h1 className="font-semibold">01.</h1>
              <Link to="posts?cat=web-design" className="text-blue-800">
                Web Design
              </Link>
              <span className="text-gray-500 text-sm">2 days ago</span>
            </div>
            {/*Title*/}
            <Link
              to="/testPost"
              className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              quas odio delectus.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
