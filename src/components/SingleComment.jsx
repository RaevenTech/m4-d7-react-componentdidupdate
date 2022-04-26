import { Button, ListGroup } from "react-bootstrap";

const deleteComment = async (asin) => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + asin,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjU2YzZmYmE5MDIzOTAwMTVkOTY2MTAiLCJpYXQiOjE2NTA5NzIxNjUsImV4cCI6MTY1MjE4MTc2NX0.phFXs4iFNWIdxfsTecjjwXqdoppBityRqPXeAsuEgjE"
        }
      }
    );
    if (response.ok) {
      alert("comment deleted!");
    } else {
      alert("comment NOT deleted!");
    }
  } catch (error) {
    alert("comment NOT deleted!");
  }
};

const SingleComment = ({ comment }) => (
  <ListGroup.Item>
    {comment.comment}
    <Button
      variant="danger"
      className="ml-2"
      onClick={() => deleteComment(comment._id)}
    >
      D
    </Button>
  </ListGroup.Item>
);

export default SingleComment;
