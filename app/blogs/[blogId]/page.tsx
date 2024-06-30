import React from 'react'
type Tparams={
    params:{
        blogId:string
    }
}

export const metadata = {
    title: "Saiful | Blog-details",
    description: "Saiful is a full-stack developer with 1.5 years of experience.",
  };
const BlogDetails = ({params}:Tparams) => {

  return (
    <div>BlogDetails {params.blogId}</div>
  )
}

export default BlogDetails