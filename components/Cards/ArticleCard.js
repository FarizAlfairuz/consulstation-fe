function ArticleCard(props) {
    const { details } = props
    console.log(details)
  return (
    <div className="bg-floralWhite rounded-lg p-4 space-y-4">
      <h4 className="text-paragraph-heading font-bold">
        {details.title}
      </h4>
      <div className="flex justify-between">
        <div className="space-y-2">
          <p className="text-xs">Publish Date</p>
          <h6 className="text-paragraph-2 font-bold">September, 24 2021</h6>
        </div>
        <div className="space-y-2">
          <p className="text-xs">Writer</p>
          <h6 className="text-paragraph-2 font-bold">John Doe</h6>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
