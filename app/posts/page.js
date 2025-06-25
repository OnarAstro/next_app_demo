import Link from "next/link";
import Todo from "../components/todo";

export default async function page() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    // SSG
    // cache: "force-cache", // بيتعملها cache يعني مش بتتغير مع تحديث ال api فا البيانات بتفضل معروضه زي ماهي بس مميزاتها انها بتعرض اسرع الصفحه

    // SSR
    // cache: "no-store", //  لو غيرت حاجه في ال api بتتحدث كل مره في الصفحه وبتتعرض للمستخدم

    next: {
      // ISR
      // بتجمع بين SSG وSSR وبتتعرض للمستخدم بتحدث كل 120 ثانية من ال api
      revalidate: 120, // في تقعد تحديث الصفحه كل 120 ثانية وبتتعرض للمستخدم بتحدث كل 120 ثانية من ال api
    },
  });
  const posts = await response.json();

  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} key={post.id} className="w-[70%] bg-white p-[10px] rounded-[10px] mt-[20px]">
        <h1 className="text-black text-2xl" >{post.title}</h1>
        <p className="text-stone-700">{post.body}</p>
      </Link>
    );
  });

  console.log(posts);

  return (
    <div>
      <h1>Posts Page</h1>

      {/* {POSTS} */}
      <div className="flex flex-col justify-center items-center ">{postsJSX}</div>
      {/*=== {POSTS} ===*/}

      {/* <div>
        <Todo />
      </div> */}
    </div>
  );
}
