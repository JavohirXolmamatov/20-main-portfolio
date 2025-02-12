import { useState } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "./config"; // Firebase ulash

function EditProject({ project, setEditingProject, setProjects }) {
  const [formData, setFormData] = useState({
    projectName: project.projectName,
    title: project.title,
    description: project.description,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const docRef = doc(db, "projects", project.id);
      await updateDoc(docRef, {
        projectName: formData.projectName,
        title: formData.title,
        description: formData.description,
      });

      // UI-ni yangilash
      setProjects((prevProjects) =>
        prevProjects.map((p) =>
          p.id === project.id ? { ...p, ...formData } : p
        )
      );

      setEditingProject(null); // Tahrirlash rejimini yopish
    } catch (error) {
      console.error("Error updating project:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Project</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setEditingProject(null)}
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Project Name</label>
                <input
                  type="text"
                  name="projectName"
                  className="form-control"
                  value={formData.projectName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProject;
