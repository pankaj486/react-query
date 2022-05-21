import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
// import {useMutation} from 'react-query';

export const CreateBooks = () => {
  const [text, setText] = useState("");
  const [body, setBody] = useState("");
  const [email, setEmail] = useState("");
//   const [getData, setGetData] = useState([]);

  const queryInvalidation = useQueryClient();
  const { isLoading, data, mutateAsync } = useMutation(
    "newUsers",
    createPosts,
    {
      onSuccess: () => {
        console.log("success");
        queryInvalidation.invalidateQueries("Users");
      },
    }
  );
  console.log("data", data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await mutateAsync({ first_name: text, last_name: body, email: email });
  };

  async function createPosts() {
    const { data } = await axios.post("http://localhost:8000/Users", {
      email: email,
      first_name: text,
      last_name: body,
    });
    return data
  }

  if (isLoading) {
    return (
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
    );
  }

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
        <button className="ui button" type="submit">Submit</button>
      </form>
    </div>
  );
};
