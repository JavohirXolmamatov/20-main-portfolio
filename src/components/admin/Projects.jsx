import ProjectsService from "./ProjectsService";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useEffect, useState } from "react";
import AddProject from "../../firebase/AddProject";
import { getAuth } from "firebase/auth";
import Loader from "../Loader";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [isProjectAdd, setIsProjectAdd] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Admin ekanligini saqlash uchun
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const user = auth.currentUser; // Hozirgi foydalanuvchi

    if (user) {
      // Admin ekanligini tekshiramiz (bu yerda admin UID larni qo‘shing)
      const adminUIDs = ["v9rmepDkOCOFDkrDAKAAlNvBLM73", "YOUR_ADMIN_UID_2"];
      setIsAdmin(adminUIDs.includes(user.uid)); // Agar admin bo‘lsa, true bo‘ladi
    } else {
      setIsAdmin(false); // Agar user bo‘lmasa, admin emas
    }

    // Firestore-dan loyihalarni yuklaymiz
    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      const projectsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setIsLoading(false);
      setProjects(projectsData);
    });

    return () => unsubscribe(); // Komponent o‘chirilganda listenerni to‘xtatamiz
  }, []);

  const addProject = () => {
    setIsProjectAdd(true);
  };

  return (
    <div className="container h-100 w-100">
      {isProjectAdd ? (
        <AddProject setIsProjectAdd={setIsProjectAdd} />
      ) : isLoading ? (
        <Loader />
      ) : (
        <ProjectsService
          projects={projects}
          isAdmin={isAdmin}
          setProjects={setProjects}
        />
      )}

      <div className="w-100 text-center pb-5">
        {/* Faqat adminlarga 'Add Project' tugmasi chiqadi */}
        {!isProjectAdd && isAdmin && (
          <button className="btn btn-primary mb-5" onClick={addProject}>
            Add project
          </button>
        )}
      </div>
    </div>
  );
}

export default Projects;
