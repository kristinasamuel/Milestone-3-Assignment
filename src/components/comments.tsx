// Home/Blog /comment section
"use client";
import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

interface Comment {
  id: string;
  author: string;
  text: string;
  blogId: string;
}

interface CommentSectionProps {
  blogId: string;
}

export default function CommentSection({ blogId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [authorName, setAuthorName] = useState("");

  const handleAddComment = () => {
    if (newComment.trim() && authorName.trim()) {
      const newCommentObj: Comment = {
        id: new Date().toISOString(),
        author: authorName,
        text: newComment,
        blogId: blogId,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
      setAuthorName("");
    }
  };

  const handleDeleteComment = (commentId: string) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentId
    );
    setComments(updatedComments);
  };

  return (
    <div className="flex flex-col justify-center items-start mt-10 bg-gray-300 w-full md:max-w-3xl lg:max-w-3xl ml-0 lg:ml-[120px] p-4 mb-10">
      <h2 className="text-[32px] font-semibold">Comments</h2>
      <div className="w-full lg:w-[500px] mt-4 space-y-2">
        {comments.length > 0 ? (
          comments
            .filter((comment) => comment.blogId === blogId)
            .map((comment) => (
              <Card key={comment.id} className="bg-white shadow">
                <CardContent className="p-4">
                  <h2 className="font-medium text-[22px]  ">
                    {comment.author}
                  </h2>
                  <p className="text-gray-700 mt-2">{comment.text}</p>
                  <Button
                    onClick={() => handleDeleteComment(comment.id)}
                    className="mt-2 text-[#fff]"
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            ))
        ) : (
          <p className="text-gray-500">
            No comments yet. Leave a comment below and let us know your
            feedback!
          </p>
        )}
      </div>
      <div className="mt-6 w-full">
        <Input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Your name"
          className="w-full mb-2"
        />
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Your comment"
          className="w-full h-[120px] mb-2 p-2 border border-gray-300 rounded resize-none"
        ></textarea>
        <Button onClick={handleAddComment} className="mt-2">
          Submit
        </Button>
      </div>
    </div>
  );
}
