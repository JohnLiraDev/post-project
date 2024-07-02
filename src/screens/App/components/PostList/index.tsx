import { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { ScrollText, Pencil, Star, StarOff, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../components/ui/dialog";
import PostEdit from "../PostEdit";
import "./style.css";
interface Props {
  posts: Post[];
  showFavorite: boolean;
  toggleStar: (id: number) => void;
  toggleShowFavorite: () => void;
  deleteAllPosts: () => void;
  deletePost: (id: number) => void;
  editPost: (id: number, title: string, content: string) => void;
}

interface Post {
  id: number;
  title: string;
  content: string;
  starred: boolean;
}

export default function PostList({
  posts,
  showFavorite,
  toggleStar,
  toggleShowFavorite,
  deletePost,
  deleteAllPosts,
  editPost,
}: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const filteredPosts = showFavorite ? posts.filter((x) => x.starred) : posts;
  const handleSetOpen = () => {
    setOpen(!open);
  };
  return (
    <div className=" shadow-2xl rounded-lg px-5 flex flex-col justify-around  items-center h-[90%] w-[90%] md:w-[390px]">
      <p className="text-3xl text-zinc-950 ">
        {showFavorite ? "Your favorite posts" : "Your posts"}
      </p>
      <ul className="rounded-lg flex flex-col  h-[80%]  gap-2 w-full overflow-y-scroll">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((x) => (
            <li key={x.id}>
              <Dialog>
                <DialogTrigger className="w-[100%]" asChild>
                  <Button
                    size={"lg"}
                    className="w-[100%] py-7 relative z-0 flex justify-between mx-auto"
                  >
                    <p className="w-[90%] text-base text-start text-ellipsis overflow-hidden text-nowrap ">
                      {x.id} - {x.title}
                    </p>
                    <button
                      className=""
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStar(x.id);
                      }}
                    >
                      {x.starred ? <Star /> : <StarOff />}
                    </button>
                  </Button>
                </DialogTrigger>
                <DialogContent className="rounded-lg  w-[90%] md:-[600px] h-[510px] ">
                  <DialogHeader className="flex text-xl flex-col justify-between ">
                    <DialogTitle>
                      {x.id} - {x.title}
                    </DialogTitle>
                    <DialogDescription className="overflow-auto text-lg  h-[400px] p-2">
                      <div
                        className="custom-list-style"
                        dangerouslySetInnerHTML={{ __html: x.content }}
                      />
                    </DialogDescription>
                    <DialogFooter className="flex flex-row justify-around  items-center ">
                      <Dialog>
                        <DialogTrigger className="">
                          <Button
                            variant={"destructive"}
                            className="gap-2 flex justify-around"
                          >
                            <p>Delete</p> <Trash2></Trash2>
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="w-[80%] rounded-xl md:w-[400px]">
                          <DialogHeader>
                            <DialogTitle>Are you absolutely sure?</DialogTitle>
                            <DialogDescription>
                              This action cannot be undone. This will
                              permanently{" "}
                              <span className="text-red-700 font-bold">
                                delete
                              </span>{" "}
                              this post and remove your data from our servers.
                            </DialogDescription>
                            <DialogFooter>
                              <div className="flex justify-around gap-2">
                                <DialogClose asChild>
                                  <Button>No, keep it.</Button>
                                </DialogClose>

                                <Button
                                  variant={"destructive"}
                                  onClick={() => deletePost(x.id)}
                                >
                                  Yes, delete.
                                </Button>
                              </div>
                            </DialogFooter>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                      <Dialog>
                        <DialogTrigger onClick={() => setOpen(true)}>
                          <Button className="flex justify-around gap-2">
                            <p>Edit</p> <Pencil size={20}></Pencil>
                          </Button>
                        </DialogTrigger>
                        {open && (
                          <DialogContent className="w-[90%] rounded-lg ">
                            <DialogHeader className=" flex flex-col items-center">
                              <DialogTitle>Edit your post</DialogTitle>
                              <PostEdit
                                editPost={editPost}
                                post={x}
                                handleSetOpen={handleSetOpen}
                              />
                            </DialogHeader>
                          </DialogContent>
                        )}
                      </Dialog>
                    </DialogFooter>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </li>
          ))
        ) : (
          <div className="h-full flex flex-col items-center py-24">
            <ScrollText size={35}></ScrollText>
            <p>Not found posts</p>
          </div>
        )}
      </ul>
      <div className="p-2 w-[100%] flex justify-around">
        <Button
          onClick={() => toggleShowFavorite()}
          className="gap-2 flex justify-around "
        >
          {showFavorite ? <p>All Posts </p> : <p>Favorites</p>}
          {showFavorite ? <StarOff></StarOff> : <Star></Star>}
        </Button>

        <Dialog>
          <DialogTrigger className=" ">
            <Button
              variant={"destructive"}
              className="gap-2 flex justify-around"
            >
              <p>Delete All</p> <Trash2></Trash2>
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[90%] rounded-lg">
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently{" "}
                <span className="text-red-700 font-bold">delete</span> your
                posts and remove your data from our servers.
              </DialogDescription>
              <DialogFooter>
                <div className="flex  justify-around gap-2">
                  <DialogClose asChild>
                    <Button>No, keep it.</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button
                      variant={"destructive"}
                      onClick={() => deleteAllPosts()}
                    >
                      Yes, delete all.
                    </Button>
                  </DialogClose>
                </div>
              </DialogFooter>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
