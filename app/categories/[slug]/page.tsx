import PageContainer from '@/components/page-container';
import PageTitle from '@/components/page-title';
import PostsList from '@/components/posts-list';
import { POSTS } from '@/utils/posts';
import React from 'react'
type Props = {
    params : {
        slug:String;
    }
}
export default function categoriesPage({ params } : Props) {
    const {slug} = params ;
  return (
    <PageContainer>
      <div className='py-10 px-4'>
        <PageTitle title={slug.replace("-"," ")}></PageTitle>
        <PostsList posts={POSTS}></PostsList>

      </div>
    </PageContainer>
  )
}
