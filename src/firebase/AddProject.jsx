import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";
import Input from "../components/Input";

function AddProject({ setIsProjectAdd }) {
  const [projectName, setProjectName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [imagesLink, setImagesLink] = useState("");

  const addProject = async (e) => {
    e.preventDefault(); // Formni default yuborilishini oldini olamiz

    // ✅ Ma'lumotlar bo‘sh emasligini tekshiramiz
    if (!projectName || !title || !description || !body || !imagesLink) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "projects"), {
        projectName,
        title,
        description,
        body,
        imagesLink,
        createdAt: serverTimestamp(), // ✅ Firebase timestamp ishlatamiz
      });

      setIsProjectAdd(false);

      // 🔄 Formni tozalaymiz
      setProjectName("");
      setTitle("");
      setDescription("");
      setBody("");
      setImagesLink("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="w-100" style={{ height: "78vh" }}>
      <h2 className="mb-5 text center ">Add new project</h2>
      <form onSubmit={addProject} className="w-100 text-center">
        <Input
          type="text"
          state={projectName}
          setState={setProjectName}
          id="projectName"
          placeholder="Project Name"
        />
        <Input
          type="text"
          state={title}
          setState={setTitle}
          id="title"
          placeholder="Title"
        />
        <Input
          type="text"
          state={description}
          setState={setDescription}
          id="description"
          placeholder="Description"
        />
        <Input
          type="text"
          state={body}
          setState={setBody}
          id="body"
          placeholder="Body"
        />
        <Input
          type="text"
          state={imagesLink}
          setState={setImagesLink}
          id="imagesLink"
          placeholder="Images Link"
        />

        <button type="submit" className="btn btn-success">
          Save project
        </button>
      </form>
    </div>
  );
}

export default AddProject;
