import { useQuery } from "react-query";
import axios from "axios";
import styled from "styled-components";
import { BooksList } from "./components/BooksList";
import { CreateBooks } from "./components/CreateBooks";
import { UpdateBooks } from "./components/UpdateBooks";
import { Route, Routes } from "react-router-dom";

const Heading = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function App() {
  async function fetchPosts() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/"
    );
    return data;
  }

  const { data, error, isError, isLoading } = useQuery("posts", fetchPosts);
    if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
  }
    return (
    <Container>
      <Heading>Posts</Heading>
      {data.map((post, index) => {
        return (
          <div key={index}>
            <div>
              <span>{index}. </span>
              {post.title}
            </div>
            {/* <img src={post.url} alt={post.thumbnailUrl}/> */}
          </div>
        );
      })}
      <BooksList />
      <CreateBooks />
      <UpdateBooks />

      {/* <Routes>
        <Route path="/book_lists">
          <BooksList />
        </Route>
        <Route path="/create_books">
          <CreateBooks />
        </Route>
        <Route path="/update_books">
          <UpdateBooks />
        </Route>
      </Routes> */}
    </Container>
  );
}

export default App;
