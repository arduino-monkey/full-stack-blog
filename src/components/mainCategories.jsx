import { Link } from "react-router-dom";
import Search from "./Search";
const MainCategories = () => {
  return (
    <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-5 shadow-lg items-center justify-center gap-8">
        {/*Links*/}
        <div className="flex-1 flex items-center justify-between flex-wrap">
            <Link to="/posts" className="bg-blue-800  rounded-full px-4 py-2 text-white">All Posts</Link>
            <Link to="/posts?cat=web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">Web Design</Link>
            <Link to="/posts?cat=development" className="hover:bg-blue-50 rounded-full px-4 py-2">Development</Link>
            <Link to="/posts?cat=cars" className="hover:bg-blue-50 rounded-full px-4 py-2">Cars</Link>
            <Link to="/posts?cat=ai" className="hover:bg-blue-50 rounded-full px-4 py-2">AI</Link>
            <Link to="/posts?cat=watches" className="hover:bg-blue-50 rounded-full px-4 py-2">Watches</Link>
        </div>
        <span className="text-xl font-medium">|</span>
        {/*Search*/}
        <Search />
    </div>
  );
};

export default MainCategories;
