import "./MiniCardTags.css";

interface IMiniCard {
  tag: string;
}

const MiniCardTags = ({ tag }: IMiniCard) => {
  return (
    <div role="tagQueue" className="miniCard">
      <p>{tag}</p>
    </div>
  );
};

export default MiniCardTags;
