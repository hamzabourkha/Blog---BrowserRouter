import { Suspense } from "react"
import { Await, NavLink, useLoaderData, useParams } from "react-router-dom"
import { Spinner } from "../Loaders/Spinner"

export function BlogDefer() {
    const { posts } = useLoaderData()
    console.log(posts)
    return <div>
        <h1>Mon blog</h1>
        <Suspense fallback={<Spinner />}>
            <Await resolve={posts}>
                {(posts)=>(
                    <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <NavLink to={post.id}>{post.title}</NavLink>
                        </li>
                    ))

                    }
                </ul>
                
                )}
                
            </Await>
        </Suspense>
    </div>
}