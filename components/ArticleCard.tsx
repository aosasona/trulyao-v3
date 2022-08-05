import { FC } from "react";
import { useRouter } from "next/router";
import { BsClock } from "react-icons/bs";
import Moment from "react-moment";
const readingTime = require("reading-time");

interface Props {
  article: {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    content?: {
      text?: string;
    };
  };
}

const ArticleCard: FC<Props> = ({ article }) => {
  const router = useRouter();
  return (
    <div
      className="w-full flex flex-col gap-3 aspect-[9/11] bg-alt-dark rounded-sm drop-shadow-sm hover:scale-95 px-8 py-10 lg:px-10 lg:py-10 transition-all duration-300 select-none"
      onClick={() => router.push(`/blog/${article?.slug}`)}
    >
      <Moment
        format="MMMM DD, YYYY"
        className="font-thin text-xs text-faded text-ellipsis"
      >
        {article?.createdAt}
      </Moment>
      <h1 className="text-4xl lg:text-4xl font-bold">{article?.title}</h1>

      <div className="flex flex-col gap-y-6 mt-auto">
        <p className="text-xs text-faded">{article?.description}</p>
        <div className="flex items-center gap-2">
          <BsClock size={15} />
          <p className="text-xs">{readingTime(article?.content?.text).text}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
