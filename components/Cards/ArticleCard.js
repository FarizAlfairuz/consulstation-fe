import Link from "next/link";

function ArticleCard(props) {
  const { details, color, textColor } = props;
  // console.log(details);

  const date = new Date(details.createdAt);
  const publishDate = date.toLocaleDateString();

  return (
    <Link href="/article/[id]" as={`/article/${details._id}`}>
      <div className={`${color} ${textColor} rounded-lg p-4 space-y-4 hover:cursor-pointer`}>
        <h4 className="text-paragraph-heading font-bold">{details.title}</h4>
        <div className="flex justify-between space-x-12">
          <div className="space-y-2">
            <p className="text-xs">Publish Date</p>
            <h6 className="text-paragraph-2 font-bold">{publishDate}</h6>
          </div>
          <div className="space-y-2">
            <p className="text-xs">Writer</p>
            <h6 className="text-paragraph-2 font-bold">Admin</h6>
          </div>
        </div>
      </div>
    </Link>
  );
}

ArticleCard.defaultProps = {
  color: "bg-white",
  textColor: "text-black"
}

export default ArticleCard;
