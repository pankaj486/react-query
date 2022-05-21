import { useQuery } from "react-query";
import styled from "styled-components";
import { BooksList } from "./components/BooksList";
import { CreateBooks } from "./components/CreateBooks";
import { UpdateBooks } from "./components/UpdateBooks";
import { fetchPosts } from "./apiFetcher";
import { Loader } from "./components/Loader";
// import { Route, Routes } from "react-router-dom";

const Heading = styled.h1`
  text-align: center;
`;

function App() {
  const { data, error, isError, isLoading } = useQuery("Users", fetchPosts);
  

  if (isError) {
    return <div>Error! {error.message}</div>;
  }


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="ui container">
          <Heading className="heading">Posts</Heading>
          {data.map((post, index) => {
            return (
              <div key={index} className="ui cards">
                <div className="card">
                  <i className="delete icon"></i>
                  <div className="content">
                    <div className="header">{post.first_name}</div>
                    <div className="meta">{post.last_name}</div>
                    <div className="description">{post.email}</div>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <BooksList /> */}
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
        </div>
      )}
    </>
  );
}

export default App;
