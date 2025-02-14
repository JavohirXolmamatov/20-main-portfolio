import { format } from "date-fns";
import EditProject from "../../firebase/EditProject";
import DeleteProject from "../../firebase/DeleteProject"; // DeleteProject komponenti alohida chaqiriladi
import { useState } from "react";

function ProjectsService({ projects, setProjects, isAdmin }) {
  const [editingProject, setEditingProject] = useState(null);

  return (
    <>
      {editingProject && (
        <EditProject
          project={editingProject}
          setEditingProject={setEditingProject}
          setProjects={setProjects}
        />
      )}

      {projects?.length > 0 ? (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 w-100 p-0 pt-3">
          {projects.map((project) => (
            <div key={project.id} className="col" style={{ height: "30rem" }}>
              <div className="card shadow-sm h-100">
                <img
                  src={project.imagesLink}
                  alt={project.imagesLink}
                  className="bd-placeholder-img card-img-top w-100"
                  style={{ height: "15rem", objectFit: "cover" }}
                />

                <div
                  className="card-body d-flex flex-column"
                  style={{ height: "15rem" }}
                >
                  <div>
                    <p className="card-text text-center fw-bold fs-4 p-0 m-2">
                      {project?.projectName}
                    </p>
                    <p className="card-text m-2 fs-5">{project?.title}</p>
                    <p className="card-text m-2">{project?.description}</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-success btn-sm"
                        onClick={() =>
                          window.open(project.projectLink, "_blank")
                        }
                      >
                        View
                      </button>
                      {isAdmin && (
                        <>
                          <button
                            type="button"
                            className="btn btn-sm btn-secondary"
                            onClick={() => setEditingProject(project)}
                          >
                            Edit
                          </button>
                          {/* DeleteProject komponenti alohida chaqirilmoqda */}
                          <DeleteProject
                            projectId={project.id}
                            setProjects={setProjects}
                          />
                        </>
                      )}
                    </div>
                    <small className="text-body-secondary">
                      {project?.createdAt
                        ? format(
                            new Date(project.createdAt.seconds * 1000),
                            "yyyy-MM-dd HH:mm"
                          )
                        : "Vaqt mavjud emas"}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center mt-4">Hali loyihalar mavjud emas</p>
      )}
    </>
  );
}

export default ProjectsService;
