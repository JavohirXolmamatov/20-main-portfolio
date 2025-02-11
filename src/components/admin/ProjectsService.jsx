function ProjectsService({ projects, isAdmin }) {
  console.log(projects); // Tekshirish uchun

  return (
    projects?.length > 0 && (
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 w-100 p-0 pt-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="col z-n1"
            style={{ height: "30rem" }}
          >
            <div className="card shadow-sm h-100">
              <svg
                className="bd-placeholder-img card-img-top w-100"
                style={{ height: "15rem" }}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-label="Placeholder: Thumbnail"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
              <div
                className="card-body d-flex flex-column" // Flexbox qo'shildi
                style={{ height: "15rem" }}
              >
                <div>
                  <p className="card-text text-center fw-bold fs-4 p-0 m-2">
                    {project?.projectName}
                  </p>
                  <p className="card-text m-2 fs-5">{project?.title}</p>
                  <p className="card-text m-2">{project?.description}</p>
                </div>
                {/* Tugmalarni pastga tushirish uchun mt-auto ishlatilgan */}
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div className="btn-group">
                    <button type="button" className="btn btn-success btn-sm">
                      View
                    </button>
                    {isAdmin && (
                      <>
                        <button
                          type="button"
                          className="btn btn-sm btn-secondary"
                        >
                          Edit
                        </button>
                        <button type="button" className="btn btn-sm btn-danger">
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                  <small className="text-body-secondary">9 mins</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  );
}

export default ProjectsService;
