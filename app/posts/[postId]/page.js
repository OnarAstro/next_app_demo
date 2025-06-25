import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
  const postId = params.postId;

  const LoadingJSX = (
    <div className="text-3xl font-bold flex justify-center items-center h-screen">
      <h1>Loading...</h1>
    </div>
  );

  return (
    <div>
      <h1>Post Details</h1>

      <Suspense fallback={LoadingJSX}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
