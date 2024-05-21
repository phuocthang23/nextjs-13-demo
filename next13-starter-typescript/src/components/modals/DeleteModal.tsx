import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IDelete {
  open: boolean;
  close: (value: boolean) => void;
  id: number;
}

function DeleteModal(props: IDelete) {
  const { open, close, id } = props;

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          toast.error("Delete Fail");
        }
        return res.json();
      })
      .then(() => {
        toast.success("Delete Success");
        mutate("http://localhost:8000/blogs");
      });

    close(false);
  };
  return (
    <>
      <Modal
        show={open}
        onHide={() => close(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Body>Do you want to delete this blog</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => close(false)}>
            Cancer
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
