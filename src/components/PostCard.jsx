import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import parse from "html-react-parser";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage, content }) {
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full h-[350px]  overflow-hidden rounded-lg cursor-pointer transform scale-100 transition-transform duration-150 ease-in transition-linear bg-white shadow-md hover:scale-110 hover:shadow-xl">
        <div className="w-full justify-center">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className=""
          />
        </div>
        <div className="mt-2 p-4 text-center">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-wrap text-gray-600 ">
            {parse(truncateString(content, 150))}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
