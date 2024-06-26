import { Post } from '@/type'
import React from 'react'
import PostCard from './post-card';
type Props = {
    posts: Post[];
 }
export default function PostsList({posts}:Props) {
  return (
    <div 
    className='mt-6 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4'>
        {posts.map((post: Post) =>(
            <PostCard key={post.id} post={post} />
        ))}
    </div>
  )
}