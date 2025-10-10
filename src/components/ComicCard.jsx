import ComicService from "../services/comic.service";

export const ComicCard = (props) => {
  const handleDelete = async (itemId) => {
  console.log("Clicked delete for comic id:", itemId);
  const isConfirmed = window.confirm("Are you sure you want to delete this Comic?");
  if (!isConfirmed) return;

  try {
    const response = await ComicService.deleteComic(itemId);
    console.log("Delete response:", response);
    if (response.status === 200 || response.status === 204) {
      alert("Comic deleted successfully!");
      window.location.reload();
    } else {
      alert("Failed to delete comic.");
    }
  } catch (error) {
    console.error("Delete error:", error);
    alert("Error deleting comic!");
  }
};

  return (
    <div className="card bg-base-100 w-80 shadow-md rounded-xl overflow-hidden">
      <figure className="h-80 w-full overflow-hidden">
        <img
          src={
            props.coverImage ||
            "https://m.media-amazon.com/images/I/712pj+kPziL._UF1000,1000_QL80_.jpg"
          }
          alt={props.title}
          className="object-cover w-full h-full"
        />
      </figure>

      <div className="card-body p-4">
        <h2 className="card-title text-center text-lg font-semibold">
          {props.title}
        </h2>

        <div className="text-sm space-y-1">
          <p><strong>Author:</strong> {props.author}</p>
          <p><strong>Illustrator:</strong> {props.illustrator}</p>
          <p><strong>Series:</strong> {props.series}</p>
          <p><strong>Volume:</strong> {props.volumeNumber}</p>
          <p><strong>Year:</strong> {props.publishYear}</p>
          <p><strong>ISBN:</strong> {props.isbn}</p>
          <p><strong>Category:</strong> {props.category}</p>
          <p><strong>Color:</strong> {props.colorType}</p>
          <p><strong>Target Age:</strong> {props.targetAge}</p>
        </div>

        <div className="card-actions justify-end mt-3">
          <button
            onClick={() => handleDelete(props.itemId)}
            className="btn btn-error btn-sm"
          >
            Delete
          </button>
          <a
            href={`/updateComic/${props.itemId}`}
            className="btn btn-warning btn-sm"
          >
            Edit
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
