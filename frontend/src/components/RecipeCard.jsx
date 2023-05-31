import PropTypes from "prop-types";

const RecipeCard = ({ title, text, imageUrl }) => {
  return (
    <div className="col">
      <div>
        <img
          className="rounded img-fluid d-block w-100 fit-cover"
          height={200}
          src={
            imageUrl ||
            "https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
          }
        />
        <div className="py-4">
          <h4>
            {title || "untitled"}
          </h4>
          <p>
            {text?.length > 160 ? text.slice(0, 160) + "..." : text || "no description"}
          </p>
        </div>
      </div>
    </div>
  );
};

RecipeCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default RecipeCard;
