import { useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
    const blogs = [
        {
            id: 1,
            title: "Understanding React Hooks",
            subTitle:
                "React Hooks provide a powerful way to use state and lifecycle features in function components React Hooks provide a powerful way to use state and lifecycle features in function components...",
            image: "https://img.freepik.com/free-vector/wood-vector-texture-template-pattern-seamless-material-hardwood-floor-natural-light-parquet-vector-illustration_1284-47074.jpg?t=st=1740580273~exp=1740583873~hmac=5642fe481fdcca9fc0fbcdc3ec86d661e9eadb33580b6eb2a7e1df28094368cc&w=900",
        },
        {
            id: 2,
            title: "Mastering JavaScript Closures",
            subTitle:
                "Closures are a fundamental concept in JavaScript that allow functions to retain access to variables allow functions to retain access to variables...",
            image: "https://img.freepik.com/free-vector/wood-vector-texture-template-pattern-seamless-material-hardwood-floor-natural-light-parquet-vector-illustration_1284-47074.jpg?t=st=1740580273~exp=1740583873~hmac=5642fe481fdcca9fc0fbcdc3ec86d661e9eadb33580b6eb2a7e1df28094368cc&w=900",
        },
        {
            id: 3,
            title: "Understanding React Hooks",
            subTitle:
                "React Hooks provide a powerful way to use state and lifecycle features in function components React Hooks provide a powerful way to use state and lifecycle features in function components...",
            image: "https://img.freepik.com/free-vector/wood-vector-texture-template-pattern-seamless-material-hardwood-floor-natural-light-parquet-vector-illustration_1284-47074.jpg?t=st=1740580273~exp=1740583873~hmac=5642fe481fdcca9fc0fbcdc3ec86d661e9eadb33580b6eb2a7e1df28094368cc&w=900",
        },
        {
            id: 4,
            title: "Mastering JavaScript Closures",
            subTitle:
                "Closures are a fundamental concept in JavaScript that allow functions to retain access to variables allow functions to retain access to variables...",
            image: "https://img.freepik.com/free-vector/wood-vector-texture-template-pattern-seamless-material-hardwood-floor-natural-light-parquet-vector-illustration_1284-47074.jpg?t=st=1740580273~exp=1740583873~hmac=5642fe481fdcca9fc0fbcdc3ec86d661e9eadb33580b6eb2a7e1df28094368cc&w=900",
        },
    ];

    const [expanded, setExpanded] = useState(null);

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            {/* Header */}
            <div className="bg-gray-900 text-white text-center py-8 text-4xl font-bold">
                Aman’s Blog
            </div>

            {/* Breadcrumb */}
            <div className="text-gray-600 text-sm my-4">
                <Link to={'/'} className="hover:underline">
                    Home
                </Link> /
                <Link to={'/blogs'} className="hover:underline">
                    Blog
                </Link>
            </div>

            {/* Blog List */}
            <div className="flex flex-wrap justify-center sm:gap-4 md:gap-6">
                {blogs.map((blog) => (
                    <div key={blog.id} className="h-fit bg-white p-4 rounded-lg shadow-lg w-full sm:w-[762px] md:w-2/5 sm:gap-2 md:gap-4 ">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-[200px] sm:h-[300px] md:h-[400px] rounded-md mb-4"
                        />
                        <h1 className="text-2xl font-bold text-gray-800">{blog.title}</h1>
                        <button
                            onClick={() => toggleExpand(blog.id)} className="flex">
                            <h2 className="text-lg text-gray-700">
                                {expanded === blog.id ? blog.subTitle : `${blog.subTitle.slice(0, 100)}...`}
                            </h2>
                        </button>
                        <button
                            onClick={() => toggleExpand(blog.id)}
                            className="mt-2 text-blue-500 hover:underline focus:outline-none"
                        >
                            {expanded === blog.id ? "Show Less" : "Read More"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
