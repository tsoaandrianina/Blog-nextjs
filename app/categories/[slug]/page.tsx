import React from 'react'
type Props = {
    params : {
        slug:String;
    }
}
export default function categoriesPage({ params } : Props) {
    const {slug} = params ;
  return (
    <div>categories Page {slug} </div>
  )
}
