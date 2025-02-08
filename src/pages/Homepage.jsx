import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col mt-4">
      {/*BREADCRUMB*/}
      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <span>•</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/*INTRODUCTION*/}
      <div className="flex items-center justify-center">
        {/*TITLES*/}
        <div>
          <h1 className="mt-4 text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-6 text-md md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            eligendi atque!
          </p>
        </div>
        {/*ANIMATED BUTTON*/}
        <Link to="/write" className="hidden relative md:flex items-center justify-center ml-4">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="text-lg tracking-widest animate-spin animateButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="bg-blue-800 rounded-full p-4 absolute flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
