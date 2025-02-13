import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase/config"; // storage ni import qilish kerak
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
  const handleFileUpload = async (file) => {
    if (!file) return;

    const fileRef = ref(storage, `projects/${file.name}`); // Firebase Storage ichida `projects` papkasiga saqlaymiz

    try {
      await uploadBytes(fileRef, file); // Rasmni yuklash
      const url = await getDownloadURL(fileRef); // Yuklangan rasm URL’sini olish
      setImagesLink(url); // State-ga saqlash
    } catch (error) {
      console.error("Rasm yuklashda xatolik:", error);
    }
  };

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
      console.log("Rasm linki:", imagesLink);
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

        {/* Rasmlar yuklash qismi */}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => handleFileUpload(e.target.files[0])} // Faylni Firebase Storage’ga yuklaydi
        />

        {/* Agar rasm yuklangan bo'lsa, ko‘rsatish */}
        {imagesLink && <img src={imagesLink} alt="Uploaded" width="100" />}

        <button type="submit" className="btn btn-success">
          {isEditing ? "Update Project" : "Save Project"}
        </button>
      </form>
    </div>
  );
}

export default AddProject;
