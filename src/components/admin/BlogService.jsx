import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useState } from "react";

function BlogService() {
  const [projectName, setProjectName] = useState("");
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [body, setBody] = useState("");
  const [imagesLink, setImagesLink] = useState("");
  const [data, setData] = useState("");

  const addProject = async () => {
    try {
      const docRef = await addDoc(collection(db, "projects"), {
        projectName,
        title,
        discription,
        body,
        imagesLink,
        data,
      });
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  return <div>BlogService</div>;
}

export default BlogService;
