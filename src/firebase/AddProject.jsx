import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";
import Input from "../components/Input";

function AddProject({ setIsProjectAdd, existingProject }) {
  const [projectName, setProjectName] = useState(
    existingProject?.projectName || ""
  );
  const [title, setTitle] = useState(existingProject?.title || "");
  const [description, setDescription] = useState(
    existingProject?.description || ""
  );
  const [body, setBody] = useState(existingProject?.body || "");
  const [imagesLink, setImagesLink] = useState(
    existingProject?.imagesLink || ""
  );

  const isEditing = !!existingProject;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectName || !title || !description || !body || !imagesLink) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    try {
      if (isEditing) {
        // Tahrirlash
        const docRef = doc(db, "projects", existingProject.id);
        await updateDoc(docRef, {
          projectName,
          title,
          description,
          body,
          imagesLink,
        });
      } else {
        // Yangi qo'shish
        await addDoc(collection(db, "projects"), {
          projectName,
          title,
          description,
          body,
          imagesLink,
          createdAt: serverTimestamp(),
        });
      }

      setIsProjectAdd(false);
      setProjectName("");
      setTitle("");
      setDescription("");
      setBody("");
      setImagesLink("");
    } catch (e) {
      console.error("Error saving document: ", e);
    }
  };

  return (
    <div className="w-100" style={{ height: "78vh" }}>
      <h2 className="mb-5 text-center ">
        {isEditing ? "Edit Project" : "Add New Project"}
      </h2>
      <form onSubmit={handleSubmit} className="w-100 text-center">
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
          {isEditing ? "Update Project" : "Save Project"}
        </button>
      </form>
    </div>
  );
}

export default AddProject;
