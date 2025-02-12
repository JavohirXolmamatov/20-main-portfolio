import { doc, deleteDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "./config"; // Firebase konfiguratsiyasi

function DeleteProject({ projectId, setProjects }) {
  const [loading, setLoading] = useState(false);

  const deleteDocument = async () => {
    if (!projectId) return;

    const confirmDelete = window.confirm("Haqiqatan ham o‘chirmoqchimisiz?");
    if (!confirmDelete) return;

    try {
      setLoading(true);
      const docRef = doc(db, "projects", projectId);
      await deleteDoc(docRef);
      console.log("Project successfully deleted!");

      // O‘chirilgandan keyin UI-ni yangilash
      setProjects((prevProjects) =>
        prevProjects.filter((project) => project.id !== projectId)
      );
    } catch (error) {
      console.error("Error deleting project:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      className="btn btn-sm btn-danger"
      onClick={deleteDocument}
      disabled={loading}
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
  );
}

export default DeleteProject;
