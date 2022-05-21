import axios from "axios";


export async function fetchPosts() {
    const { data } = await axios.get("http://localhost:8000/Users");
    return data;
  }

export async function createPosts(email, text, body) {
  try {
    if (email && text && body) {
      const response = await axios.post("http://localhost:8000/Users", {
        email: email,
        first_name: text,
        last_name: body,
      });
      console.log("response", response);
    }
    
  } catch (error) {
    console.log(error);
  }
}
