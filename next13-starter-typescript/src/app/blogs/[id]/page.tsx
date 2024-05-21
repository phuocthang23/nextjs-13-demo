"use client";
import Link from "next/link";
import React from "react";
import { Button, Card } from "react-bootstrap";

interface IParam {
  params: {
    id: string;
  };
}
const DetailBlog = ({ params }: IParam) => {
  return (
    <div>
      <div className="my-3">
        <Link href="/blogs" className="text-decoration-none text-danger">
          Go back
        </Link>
      </div>
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default DetailBlog;
