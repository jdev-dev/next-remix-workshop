import React from "react";
import Link from "next/link";

import { NextPage } from "next";

type TagsPropsType = {
  tags: string[]
}

const Tags: NextPage<TagsPropsType> = ({ tags }) => {

  return (
    <div className="tag-list">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tag/${tag}`}
          as={`/tag/${tag}`}
          className="tag-default tag-pill"
        >
          <span>{tag}</span>
        </Link>
      ))}
    </div>
  );
};

export default Tags;
