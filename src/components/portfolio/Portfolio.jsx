import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import ProjectsService from "../admin/ProjectsService";
import Loader from "../Loader";

function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loader uchun state

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      const projectsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsData);
      setIsLoading(false); // Ma'lumot kelgandan keyin loaderni o‘chiramiz
    });

    return () => unsubscribe(); // Komponent o‘chirilganda listenerni to‘xtatamiz
  }, []);

  return (
    <div
      className="container portfolio h-100 m-0 p-0"
      style={{
        overflowY: "scroll",
        WebkitScrollSnapType: "none",
        scrollbarWidth: "none", // Firefox uchun
        msOverflowStyle: "none", // IE va eski Edge uchun
      }}
    >
      <h1 className="pt-5 text-center fw-bold">Projects</h1>

      {isLoading ? <Loader /> : <ProjectsService projects={projects} />}
    </div>
  );
}

export default Portfolio;
