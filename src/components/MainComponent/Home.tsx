import CustomButton from "../button/CustomButton";

export default function Home() {
  function addHandler() {
    alert("click to add!");
  }
  function editHandler() {
    alert("click to edit!");
  }
  function deleteHandler() {
    alert("click to delete!");
  }
  return (
    <>
      <CustomButton
        label="Add"
        onClick={addHandler}
        type="button"
        styleType="add"
        className={"margin-around"}
        tooleTip="Click to add"
      />
      <CustomButton
        label="Edit"
        onClick={editHandler}
        type="button"
        styleType="other"
        className={"margin-around"}
        tooleTip="Click to edit"
      />
      <CustomButton
        label="Delete"
        onClick={deleteHandler}
        type="button"
        styleType="delete"
        className={"margin-around"}
        tooleTip="Click to delete"
      />
    </>
  );
}
