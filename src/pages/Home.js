 import Header from "../components/Header";

const blogs = [
  { id: 1, title: "First Blog", content: "This is the first blog post" },
  { id: 2, title: "Second Blog", content: "This is another blog post" },
];

const Home = ({ setUser }) => {
  return (
    <div>
      <Header setUser={setUser} />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Blogs</h2>
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 mb-4 rounded shadow">
            <h3 className="text-xl font-semibold">{blog.title}</h3>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
