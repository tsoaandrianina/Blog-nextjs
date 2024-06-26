'use client';
import PageContainer from "@/components/page-container";
import PostsList from "@/components/posts-list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Category } from "@/type";
import { CATEGORIES } from "@/utils/categories";
import { POSTS } from "@/utils/posts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
   <PageContainer>
    <div className="py-10 px-4">
      {/* {1st secttion } */}
      <div
      style={{backgroundImage: "url(/img/banner1.jpg"}}
      className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="sm:max-w-xl max-w-xs bg-secondary/80 p-4 rounded-lg">
          <h1 className="font-bold text-3xl sm:text-5xl text-black dark:text-white">
            Become A Better React Developper
          </h1> 
          <Input type="email" placeholder="Email" className="dark:bg-white mt-4" />
          <Button size="lg" className="w-full py-6 text-xl mt-4">
              Subscribe to our Newsletter
          </Button>
          </div>
        </div>
      </div>

      {/* {categorie section} */}
      <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center items-center">
        {CATEGORIES.map((category: Category) => (
            <Button variant="outline" key={category.id}>
                <Link href={`/categories/${category.slug}`}>
                {category.name}
                </Link>
            </Button>
        ))}

      </div>

      {/* {Posts} */}
      <PostsList posts={POSTS} />

    </div>
   </PageContainer>
  );
}
