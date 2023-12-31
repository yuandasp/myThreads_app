import Image from "next/image";
import Link from "next/link";
import CopyToClipboard from "../CopyToClipBoard";
import { formatDateString } from "@/lib/utils";

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: {
    name: string;
    image: string;
    id: string;
  };
  createdAt: string;
  comments: {
    author: {
      image: string;
    };
  }[];
  isComment?: boolean;
}

const ThreadCard = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  createdAt,
  comments,
  isComment,
}: Props) => {
  return (
    <article
      className={`flex flex-col w-full rounded- ${
        isComment ? "px-0 xs:px-7" : "bg-dark-2 p-7"
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-1 w-full flex-row gap-4">
          <div className="flex flex-col items-center">
            <Link href={`/profile/${author.id}`} className="relative h-11 w-11">
              <Image
                src={author.image}
                alt="Profile image"
                fill
                className="rounded-full cursor-pointer"
              />
            </Link>

            <div className="thread-card_bar" />
          </div>

          <div className="flex flex-col w-full">
            <Link href={`/profile/${author.id}`} className="w-fit">
              <h4 className="cursor-pointer text-light-1 text-base-semibold">
                {author.name}
              </h4>
            </Link>
            <p className="mt-2 text-small-regular text-light-2">{content}</p>

            <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
              <div className="flex gap-6">
                <Image
                  src="/assets/icon-likes.png"
                  alt="likes"
                  width={24}
                  height={24}
                  className="cursor-pointer object-contain"
                />
                <Link href={`/thread/${id}`}>
                  <Image
                    src="/assets/icon-comment.png"
                    alt="likes"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain"
                  />
                </Link>
                <CopyToClipboard
                  text={`${process.env.NEXT_PUBLIC_SITE_URL}/thread/${id}`}
                >
                  <Image
                    src="/assets/icon-share.png"
                    alt="likes"
                    width={24}
                    height={24}
                    className="cursor-pointer object-contain"
                  />
                </CopyToClipboard>
              </div>
              <p className="text-subtle-medium text-gray-1 mt-2">
                {formatDateString(createdAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {comments.length > 0 && (
          <div className="ml-1 mt-3 flex items-center gap-2">
            {comments.slice(0, 2).map((comment, index) => (
              <Image
                key={index}
                src={comment.author.image}
                alt={`user_${index}`}
                width={24}
                height={24}
                className={`${
                  index !== 0 && "-ml-5"
                } rounded-full object-cover`}
              />
            ))}

            <Link href={`/thread/${id}`}>
              <p className="mt-1 text-subtle-medium text-gray-1">
                {comments.length} repl{comments.length > 1 ? "ies" : "y"}
              </p>
            </Link>
          </div>
        )}
      </div>
    </article>
  );
};

export default ThreadCard;
