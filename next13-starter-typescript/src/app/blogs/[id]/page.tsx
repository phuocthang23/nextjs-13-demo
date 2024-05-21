import React from "react";

interface IParam {
  params: {
    id: string;
  };
}
const DetailBlog = ({ params }: IParam) => {
  return <div>view detail blog here My Post: {params.id}</div>;
};

export default DetailBlog;
