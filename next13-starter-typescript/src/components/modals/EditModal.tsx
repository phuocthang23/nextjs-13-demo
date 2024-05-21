import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";

interface CreateModalProps {
  open: boolean;
  close: (value: boolean) => void;
  id: number;
}

function EditModal(props: CreateModalProps) {
  const { open, close, id } = props;

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`http://localhost:8000/blogs/${id}`, fetcher);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setAuthor(data.author);
      setContent(data.content);
    }
  }, [data]);

  if (error) return <div>Failed to load</div>;

  function handleUpdate(e: any) {
    e.preventDefault();

    if (!title || !author || !content) {
      toast.warning("Title, Author, and Content are required");
      return;
    }

    fetch(`http://localhost:8000/blogs/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, author }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) toast.success("Update Success");
        mutate("http://localhost:8000/blogs");
      })
      .catch(() => toast.error("Update Fail"));

    handleClose();
  }

  function handleClose() {
    close(false);
    // setAuthor(data.author);
    // setContent(data.content);
    // setTitle(data.title);
  }

  return (
    <>
      <Modal
        show={open}
        onHide={() => close(false)}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Blog Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
