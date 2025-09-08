import Image from "next/image";

function BlogSection() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Learn best practices for structuring large React applications with proper state management and component architecture.",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "React",
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
    },
    {
      title: "Modern CSS Techniques for 2024",
      excerpt:
        "Explore the latest CSS features including container queries, cascade layers, and modern layout techniques.",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      category: "CSS",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "API Design Best Practices",
      excerpt:
        "Guidelines for designing RESTful APIs that are maintainable, scalable, and developer-friendly.",
      date: "Dec 5, 2023",
      readTime: "10 min read",
      category: "Backend",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "Performance Optimization in Next.js",
      excerpt:
        "Techniques to improve your Next.js application performance including image optimization and code splitting.",
      date: "Nov 28, 2023",
      readTime: "7 min read",
      category: "Next.js",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
    {
      title: "The Future of Web Development",
      excerpt:
        "Exploring emerging trends and technologies that will shape the future of web development.",
      date: "Nov 20, 2023",
      readTime: "5 min read",
      category: "Trends",
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div>
      <div className="mb-12">
        <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
          // BLOG
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
          Latest Articles
        </h1>
        <p className="text-gray-600 max-w-2xl">
          Sharing my thoughts and insights about web development, technology
          trends, and best practices.
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="mb-12">
          <div className="text-xs font-medium text-gray-500 tracking-wider mb-4">
            FEATURED POST
          </div>
          <div className="grid md:grid-cols-2 gap-8 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div>
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-3">
                <span className="px-2 py-1 bg-black text-white text-xs rounded-full">
                  {featuredPost.category}
                </span>
                <span className="text-xs text-gray-500">
                  {featuredPost.date}
                </span>
                <span className="text-xs text-gray-500">
                  {featuredPost.readTime}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-black mb-3 hover:text-gray-600 cursor-pointer transition-colors">
                {featuredPost.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {featuredPost.excerpt}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Regular Posts */}
      <div className="grid md:grid-cols-2 gap-8">
        {regularPosts.map((post, index) => (
          <article key={index} className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-4 mb-3">
              <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                {post.category}
              </span>
              <span className="text-xs text-gray-500">{post.date}</span>
              <span className="text-xs text-gray-500">{post.readTime}</span>
            </div>
            <h3 className="text-xl font-bold text-black mb-2 group-hover:text-gray-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogSection;
