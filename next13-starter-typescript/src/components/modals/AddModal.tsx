"use client";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { mutate } from "swr";
interface CreateModalProps {
  open: boolean;
  close: (value: boolean) => void;
}

function CreateModal(props: CreateModalProps) {
  const { open, close } = props;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();

    if (!title) {
      toast.warning("Title is required");
      return;
    } else if (!author) {
      toast.warning("Author is required");
      return;
    } else if (!content) {
      toast.warning("Content is required");
      return;
    }

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content, author }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) toast.success("Add Success");
        mutate("http://localhost:8000/blogs", data);
      })
      .catch(() => toast.error("Add Fail"));

    handleClose();
  }

  function handleClose() {
    close(false);
    setAuthor("");
    setContent("");
    setTitle("");
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
          <Modal.Title>Add New Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form action={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="......"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="......"
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
            Cancer
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateModal;
