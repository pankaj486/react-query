import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { createPosts } from "../apiFetcher";
import { Loader } from "./Loader";


export const CreateBooks = () => {
  const [text, setText] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");

  const queryInvalidation = useQueryClient();
  const { isLoading, mutateAsync } = useMutation(
    "newUsers",
    createPosts(email, text, body),
    {
      onSuccess: () => {
        console.log("success");
        queryInvalidation.invalidateQueries("Users");
      },
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutateAsync({ first_name: text, last_name: body, email: email });
  };

  return (
    <div>
      <h1>CreateBooks</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="First Name"
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Last Name"
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <button className="ui button" type="submit">
            Submit
          </button>
        )}
      </form>
    </div>
  );
};
