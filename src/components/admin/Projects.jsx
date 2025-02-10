import ProjectsService from "./ProjectsService";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      const projectsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsData);
    });

    return () => unsubscribe(); // Komponent o‘chirilganda listenerni to‘xtatamiz
  }, []);

  return (
    <div className="mt-5">
      <ProjectsService projects={projects} />
    </div>
  );
}

export default Projects;
