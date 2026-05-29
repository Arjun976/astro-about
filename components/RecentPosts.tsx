import Image from "next/image";
import Link from "next/link";
import { getRecentPosts } from "@/lib/wordpress";

export default async function RecentPosts() {
  const posts = await getRecentPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <div className="text-center mb-16">
          <h3 className="text-[#EC2226] font-bold tracking-widest uppercase mb-4 text-sm">Our Blog</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-[#026BAE] font-poppins">Latest News & Articles</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => {
            const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/image/blog1.png";
            const date = new Date(post.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            });

            return (
              <article key={post.id} className="bg-white rounded-[5px] overflow-hidden shadow-md hover:shadow-xl transition duration-300 group">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={featuredImage} 
                    alt={post.title.rendered} 
                    fill 
                    className="object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#EC2226] text-white text-xs font-bold px-3 py-1 rounded-sm">
                    {date}
                  </div>
                </div>
                <div className="p-8">
                  <h3 
                    className="text-xl font-bold text-[#026BAE] mb-4 font-poppins line-clamp-2 hover:text-[#EC2226] transition"
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                  <div 
                    className="text-zinc-600 text-sm mb-6 line-clamp-3 font-poppins"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-[#026BAE] font-bold text-sm hover:underline flex items-center gap-2"
                  >
                    READ MORE <i className="fa-solid fa-arrow-right text-[10px]" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
