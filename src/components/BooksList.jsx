import React from "react";
import { useQueryClient } from "react-query";

export const useGetFetchQuery = (name) => {
    const queryClient = useQueryClient();

    return queryClient.getQueryData(name);
};



export const BooksList = () => {

    const books = useGetFetchQuery("posts");

    // console.log("books", books);
    return (
        <div>
            <h1>BooksList</h1>
            <h1>{books[0].title}</h1>
        </div>
    );
}