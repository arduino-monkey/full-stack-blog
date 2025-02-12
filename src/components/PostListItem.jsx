import Image from "./Image";
import { Link } from "react-router-dom";

const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/*Image*/}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="rounded-3xl object-cover" />
      </div>
      {/*Details*/}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/testPost" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
          expedita?
        </Link>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <span>Written By</span>
          <Link className="text-blue-800">Arya Anand</Link>
          <span>On</span>
          <Link to="posts?cat=web-design" className="text-blue-800">
            Web Design
          </Link>
          <span>2 days ago</span>
        </div>
        <p className="text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate
          illo incidunt repudiandae unde ullam magnam. Quod unde veritatis
          facilis distinctio ut ex neque! Pariatur, consequuntur id eius esse
          laboriosam, assumenda dicta rem debitis hic quas placeat et dolorem
          sunt quasi quidem praesentium unde accusamus ad reiciendis molestias
          optio illo dignissimos.
        </p>
        <Link to="/testPost" className="underline text-blue-800 text-sm">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
