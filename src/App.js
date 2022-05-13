import { useQuery } from 'react-query'
import axios from 'axios'
import styled from 'styled-components';



const Heading = styled.h1`
  text-align : center;
`;


function App() {

  async function fetchPosts() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos/')
    return data
  }


  const { data, error, isError, isLoading } = useQuery('posts', fetchPosts)
  // first argument is a string to cache and track the query result
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <div>Error! {error.message}</div>
  }



  return (
    <div>
      <Heading>Posts</Heading>
      {
        data.map((post) => {
          return(
            <div>
              <div>{post.title}</div>
              <img src={post.url} alt={post.thumbnailUrl}/>
            </div>
          ); 
        })
      }

    </div>
  );
}

export default App;
