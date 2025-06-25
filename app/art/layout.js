
export const metadata = {
  title: "art page",
  
}
const layout = ({ children }) => {
  return (
    <div>
      <h1>Art Layout</h1>

      <div className="mt-[50px] p-[20px] bg-blue-400 rounded-2xl">
        {children}
      </div>
    </div>
  );
};

export default layout;
