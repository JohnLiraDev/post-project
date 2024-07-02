import { useEffect, useState } from "react";
import Letter from "../components/Letter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

interface Post {
  id: number;
  title: string;
  content: string;
  starred: boolean;
}

export default function Main() {
  const loadPostsFromLocalStorage = (): Post[] => {
    const storedPosts = localStorage.getItem("posts");
    return storedPosts ? JSON.parse(storedPosts) : [];
  };
  const [posts, setPosts] = useState<Post[]>(loadPostsFromLocalStorage());
  const [showFavorite, setShowFavorite] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);
  const toggleStar = (id: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, starred: !post.starred } : post
      )
    );
  };

  const createPost = (title: string, content: string) => {
    if (!title || !content) {
      return null;
    }
    const nextId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;
    const post = {
      id: nextId,
      title: title,
      content: content,
      starred: false,
    };
    setPosts([...posts, post]);
  };
  const editPost = (id: number, title: string, content: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, title: title, content: content } : post
      )
    );
  };
  const toggleShowFavorite = () => {
    setShowFavorite(!showFavorite);
  };
  const deleteAllPosts = () => {
    setPosts([]);
  };
  const deletePost = (id: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  return (
    <main className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center md:justify-around gap-5 mt-2 h-[600px]  ">
      <div className="w-full md:w-min flex flex-col items-center">
        <Letter></Letter>
        <PostForm createPost={createPost}></PostForm>
      </div>
      <PostList
        toggleShowFavorite={toggleShowFavorite}
        toggleStar={toggleStar}
        posts={posts}
        showFavorite={showFavorite}
        deleteAllPosts={deleteAllPosts}
        deletePost={deletePost}
        editPost={editPost}
      ></PostList>
    </main>
  );
}
