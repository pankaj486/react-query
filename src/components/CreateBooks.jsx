import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
// import {useMutation} from 'react-query';



export const CreateBooks = () => {

    const [text, setText] = useState("");
    const [body, setBody] = useState("");
    const [getData, setGetData] = useState([]);


    const queryInvalidation = useQueryClient();
    const { isLoading, data, mutateAsync } = useMutation("addPosts", createPosts, {
        onSuccess: () => {
            console.log("success");
            queryInvalidation.invalidateQueries("posts");
        }
    });
    console.log("data", data);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("text", text);
        // setText(text);
        // setBody(body);
        await mutateAsync({ title: text, body: body });
    };

    async function createPosts() {
        const { data } = await axios.post(
            "https://jsonplaceholder.typicode.com/posts/", { userId: 11, id: 101, text, body }
        );
        return setGetData(data);
    }

    if (isLoading) {
        return <div>Data Saving...Wait</div>;
    }

    return (
        <div>
            <h1>CreateBooks</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            {getData ? (<><h1>{getData.text}</h1>
                <p>{getData.body}</p></>) : null}
        </div>
    );
}
