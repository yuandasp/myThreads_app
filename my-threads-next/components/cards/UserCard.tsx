"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  personType: string;
}
function UserCard({ id, name, username, imgUrl, personType }: Props) {
  const router = useRouter();

  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <div className="relative h-11 w-11 object cover">
          <Image
            src={imgUrl}
            alt="logo"
            fill
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex-1 text-ellipsis">
          <h4 className="text-base-semibold text-light-1">{name}</h4>
          <p className="text-small-medium text-gray-1">@{username}</p>
        </div>
      </div>

      <Button
        className="user-card_btn"
        onClick={() => router.push(`/profile/${id}`)}
      >
        View
      </Button>
    </article>
  );
}

export default UserCard;
