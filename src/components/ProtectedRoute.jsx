import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function ProtectedRoute() {
  const [isAuth, setIsAuth] = useState(null); // ✅ null orqali boshlaymiz

  useEffect(() => {
    const auth = getAuth();

    // Auth state'ni tekshirish
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  // ⏳ Agar `isAuth` null bo‘lsa, kutish uchun loader yoki hech narsa qaytaramiz
  if (isAuth === null) {
    return <div>Loading...</div>; // ❗ Sahifa almashishini oldini olish
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
