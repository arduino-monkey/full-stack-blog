import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="flex flex-col gap-6 mb-4">
      <h1 className="underline">Comments</h1>
      <div className="flex gap-4 items-center">
        <textarea
          placeholder="Write a comment..."
          className="min-h-12 h-24 rounded-2xl p-2 flex-1"
        />
        <button className="bg-blue-800 text-white rounded-2xl p-4 font-semibold">
          Send
        </button>
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
