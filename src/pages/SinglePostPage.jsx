import Image from "../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="mt-6">
      {/*Details*/}
      <div className="flex gap-8">
        <div className="flex flex-col w-3/5 gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
            sint!
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written By</span>
            <Link className="text-blue-800">Arya Anand</Link>
            <span>On</span>
            <Link to="posts?cat=web-design" className="text-blue-800">
              Web Design
            </Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-400 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            soluta voluptate. Itaque autem quae assumenda. Quibusdam odit,
            accusamus consectetur deleniti qui natus sunt optio porro magnam
            fugiat quaerat adipisci sit.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="postImg.jpeg" className="rounded-3xl object-cover" />
        </div>
      </div>
      {/*Content*/}
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="lg:text-lg flex flex-col gap-6 text-justify w-10/12 sm:w-[calc(100%-2rem)]">
          <div className="flex flex-col gap-6">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, perferendis quae? Consequatur, sed nemo quos non est
              necessitatibus, facere repellat optio laudantium, natus
              architecto. Eligendi eius id magni ipsum nobis, eveniet eum nulla
              eaque quibusdam, officiis beatae, saepe illo iste possimus
              consequuntur porro provident dolores repudiandae incidunt ea sequi
              doloribus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, perferendis quae? Consequatur, sed nemo quos non est
              necessitatibus, facere repellat optio laudantium, natus
              architecto. Eligendi eius id magni ipsum nobis, eveniet eum nulla
              eaque quibusdam, officiis beatae, saepe illo iste possimus
              consequuntur porro provident dolores repudiandae incidunt ea sequi
              doloribus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, perferendis quae? Consequatur, sed nemo quos non est
              necessitatibus, facere repellat optio laudantium, natus
              architecto. Eligendi eius id magni ipsum nobis, eveniet eum nulla
              eaque quibusdam, officiis beatae, saepe illo iste possimus
              consequuntur porro provident dolores repudiandae incidunt ea sequi
              doloribus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, perferendis quae? Consequatur, sed nemo quos non est
              necessitatibus, facere repellat optio laudantium, natus
              architecto. Eligendi eius id magni ipsum nobis, eveniet eum nulla
              eaque quibusdam, officiis beatae, saepe illo iste possimus
              consequuntur porro provident dolores repudiandae incidunt ea sequi
              doloribus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, perferendis quae? Consequatur, sed nemo quos non est
              necessitatibus, facere repellat optio laudantium, natus
              architecto. Eligendi eius id magni ipsum nobis, eveniet eum nulla
              eaque quibusdam, officiis beatae, saepe illo iste possimus
              consequuntur porro provident dolores repudiandae incidunt ea sequi
              doloribus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, perferendis quae? Consequatur, sed nemo quos non est
              necessitatibus, facere repellat optio laudantium, natus
              architecto. Eligendi eius id magni ipsum nobis, eveniet eum nulla
              eaque quibusdam, officiis beatae, saepe illo iste possimus
              consequuntur porro provident dolores repudiandae incidunt ea sequi
              doloribus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, perferendis quae? Consequatur, sed nemo quos non est
              necessitatibus, facere repellat optio laudantium, natus
              architecto. Eligendi eius id magni ipsum nobis, eveniet eum nulla
              eaque quibusdam, officiis beatae, saepe illo iste possimus
              consequuntur porro provident dolores repudiandae incidunt ea sequi
              doloribus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, perferendis quae? Consequatur, sed nemo quos non est
              necessitatibus, facere repellat optio laudantium, natus
              architecto. Eligendi eius id magni ipsum nobis, eveniet eum nulla
              eaque quibusdam, officiis beatae, saepe illo iste possimus
              consequuntur porro provident dolores repudiandae incidunt ea sequi
              doloribus!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatem, perferendis quae? Consequatur, sed nemo quos non est
              necessitatibus, facere repellat optio laudantium, natus
              architecto. Eligendi eius id magni ipsum nobis, eveniet eum nulla
              eaque quibusdam, officiis beatae, saepe illo iste possimus
              consequuntur porro provident dolores repudiandae incidunt ea sequi
              doloribus!
            </p>
          </div>
          <Comments />
        </div>
        {/*Side Menu*/}
        <div className="px-4 h-max top-6 sticky w-2/12 hidden md:block">
          <h1 className="mt-4 mb-4 text-sm font-medium">Author</h1>
          <div className="flex gap-4 items-center">
            <Image
              src="userImg.jpeg"
              className="w-12 h-12 rounded-full object-cover"
              w="48"
              h="48"
            />
            <Link className="text-blue-800">Arya Anand</Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <div className="flex gap-4 mt-4">
            <Link>
              <Image src="facebook.svg" />
            </Link>
            <Link>
              <Image src="instagram.svg" />
            </Link>
          </div>
          <PostMenuActions />
          <h1 className="mt-4 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/">
              All
            </Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Cars
            </Link>
            <Link className="underline" to="/">
              AI
            </Link>
            <Link className="underline" to="/">
              Watches
            </Link>
          </div>
          <h1 className="mt-4 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
