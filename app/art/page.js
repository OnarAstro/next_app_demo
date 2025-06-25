import Link from "next/link";




const page = () => {
  return (
    <div>
      <h1>Art Page</h1>
      <Link href="/posts">
        <button>Take me to the posts page</button>
      </Link>
    </div>
  );
};

export default page;
