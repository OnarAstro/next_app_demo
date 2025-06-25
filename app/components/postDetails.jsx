export default async function PostDetails({ postId }) {
  // بتستنا ثانيتين علي شان ينقلك للصفحه دي يعني لو نا في صفحه تانيه وعاوز اروح لي دي هستنا ثانيتين الاول
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        // ISR
        revalidate: 120,
      },
    }
  );
  const post = await response.json();

  return (
    <div>
      <div className="w-[70%] bg-white p-[10px] rounded-[10px] mt-[20px]">
        <h1 className="text-black text-2xl">{post.title}</h1>
        <p className="text-stone-700">{post.body}</p>
      </div>
    </div>
  );
}
