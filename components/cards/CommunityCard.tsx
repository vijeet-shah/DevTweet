import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface Props {
  id: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  members: {
    image: string;
  }[];
}

function CommunityCard({ id, name, username, imgUrl, bio, members }: Props) {
  return (
    <article className="bg-white border border-gray-300 rounded-lg shadow-md p-5 space-y-4">
      <div className="flex items-center space-x-4">
        <Link href={`/communities/${id}`}>
          <div className="relative w-12 h-12 overflow-hidden rounded-full">
            <Image
              src={imgUrl}
              alt="community_logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </Link>

        <div className="flex flex-col">
          <Link href={`/communities/${id}`}>
            <h4 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition duration-300">
              {name}
            </h4>
          </Link>
          <p className="text-sm text-gray-500">@{username}</p>
        </div>
      </div>

      <p className="text-gray-600">{bio}</p>

      <div className="flex items-center justify-between">
        <Link href={`/communities/${id}`}>
          <Button size="sm" >
            View Community
          </Button>
        </Link>

        {members.length > 0 && (
          <div className="flex items-center space-x-1">
            {members.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className={`w-6 h-6 rounded-full overflow-hidden ${
                  index > 0 && "-ml-2"
                }`}
              >
                <Image
                  src={member.image}
                  alt={`user_${index}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
            {members.length > 3 && (
              <p className="text-sm text-gray-500 ml-2">
                +{members.length - 3} more
              </p>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default CommunityCard;
