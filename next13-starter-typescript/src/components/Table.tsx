"use client";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import CreateModal from "./modals/AddModal";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditModal from "./modals/EditModal";
import DeleteModal from "./modals/DeleteModal";
interface IProps {
  blogs: IBlog[];
}
function TableList({ blogs }: IProps) {
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [id, setId] = useState<number>();

  const handleEdit = (id: number) => {
    setId(id);
    setShowEdit(true);
  };

  const handleDelete = (id: number) => {
    setId(id);
    setShowConfirm(true);
  };

  return (
    <div className="py-4">
      <Container>
        <Row className="my-2" style={{ alignItems: "center" }}>
          <Col>
            <h3>Table Blogs</h3>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <Button variant="primary" onClick={() => setShow(true)}>
              Add More
            </Button>
          </Col>
        </Row>
        <CreateModal open={show} close={setShow} />
      </Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {blogs.length > 0 &&
            blogs?.map((blog) => (
              <tr key={blog.id}>
                <td>{blog.id}</td>
                <td>{blog.title}</td>
                <td>{blog.author}</td>
                <td>
                  <Link href={`/blogs/${blog.id}`}>View</Link>
                  <Button
                    variant="danger"
                    className="mx-3"
                    onClick={() => handleDelete(blog?.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => handleEdit(blog?.id)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {id !== undefined && (
        <EditModal open={showEdit} close={setShowEdit} id={id} />
      )}
      {id !== undefined && (
        <DeleteModal open={showConfirm} close={setShowConfirm} id={id} />
      )}
      <ToastContainer />
    </div>
  );
}

export default TableList;
