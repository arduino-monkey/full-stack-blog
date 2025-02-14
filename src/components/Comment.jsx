import { Link } from "react-router-dom";
import Image from "./Image";

const Comment = () => {
  return (
    <div className="bg-white p-4 rounded-2xl">
      {/*Comment Details*/}
      <div className="flex gap-3 items-center text-base">
        <Image
          src="userImg.jpeg"
          className="w-10 h-10 rounded-full object-cover"
        />
        <Link className="text-blue-800">Arya Anand</Link>
        <span>2 days ago</span>
      </div>
      {/*Comment Body*/}
      <p className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
        corrupti eveniet vel ut accusamus asperiores, explicabo doloribus
        nostrum voluptates quisquam.
      </p>
    </div>
  );
};

export default Comment;
