import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { Toaster } from "sonner";


// =====================================
// Layouts
// =====================================

import Authlayout from "./layout/Authlayout";
import Mainlayout from "./layout/Mainlayout";
import Adminlayout from "./layout/Adminlayout";


// =====================================
// Guards
// =====================================

import AuthGuard from "./guard/AuthGuard";
import AdminGuard from "./guard/AdminGuard";
import CourseGuard from "./guard/CourseGuard";


// =====================================
// Auth Pages
// =====================================

import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ForgetPassword from "./pages/Auth/ForgetPassword"


// =====================================
// Student Pages
// =====================================

import Home from "./pages/Home";
import Notice from "./pages/Notice";
import Results from "./pages/Results";
import CourseRoom from "./pages/CourseRoom";
import Courselayout from "./layout/Courselayout";


// =====================================
// Admin Pages
// =====================================

import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminCourses from "./pages/admin/courses/AdminCourses";
import CreateCourse from "./pages/admin/courses/CreateCourse";
import EditCourse from "./pages/admin/courses/EditCourse";
import DeleteCourse from "./pages/admin/courses/DeleteCourse";
import AdminNotices from "./pages/admin/notices/AdminNotices";
import CreateNotice from "./pages/admin/notices/CreateNotice";
import EditNotice from "./pages/admin/notices/EditNotice";
import DeleteNotice from "./pages/admin/notices/DeleteNotice";
import AdminResults from "./pages/admin/results/AdminResults";
import CreateResult from "./pages/admin/results/CreateResult";
import EditResult from "./pages/admin/results/EditResult";
import DeleteResult from "./pages/admin/results/DeleteResult";
import EnrollmentRequests from "./pages/admin/EnrollmentRequests";
import ResetPassword from "./pages/Auth/ResetPassword";
import Profile from "./pages/Profile";
import About from "./pages/About";






// =====================================
// Router
// =====================================

const router = createBrowserRouter([

  // ==================================
  // AUTH
  // ==================================
  {
    element: <Authlayout />,

    children: [
      {
        path: "/",
        element: <Register />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/forgot-password",
        element: <ForgetPassword />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      }
    ],
  },


  // ==================================
  // STUDENT PROTECTED ROUTES
  // ==================================
  {
    element: <AuthGuard />,

    children: [
      {
        element: <Mainlayout />,

        children: [
          {
            path: "/home",
            element: <Home />,
          },
          {
            path: "/notices",
            element: <Notice />,
          },

          {
            path: "/results",
            element: <Results />,
          },
          {
            path: "/profile",
            element: <Profile />,
          },
          {
            path: "/about",
            element: <About />,
          },
        
        ],
      },

          
          // ============================
          // COURSE PROTECTED ROUTE
          // ============================
          {
            element: <Courselayout />,

            children: [
              {
                  path: "/courses/:courseName",
                  element: <CourseRoom />,
              },
            ],
          },
    ],
  },


  // ==================================
  // ADMIN PROTECTED ROUTES
  // ==================================
  {
    element: <AdminGuard />,

    children: [
      {
        element: <Adminlayout />,

        children: [
          {
            path: "/admin",
            element: <AdminDashboard />,
          },

          {
            path: "/admin/courses",
            element: <AdminCourses />,
          },

          {
            path: "/admin/courses/create",
            element: <CreateCourse />,
          },

          {
            path: "/admin/courses/:courseId/edit",
            element: <EditCourse />,
          },
          {
            path: "/admin/courses/:courseId/delete",
            element: <DeleteCourse/>
          },
          {
            path: "/admin/notices",
            element: <AdminNotices />
          },
          {
            path: "/admin/enrollments",
            element: <EnrollmentRequests />,
          },
          {
            path: "/admin/notices/create",
            element: <CreateNotice />
          },
          {
            path: "/admin/notices/:noticeId/edit",
            element: <EditNotice/>
          },
          {
            path: "/admin/notices/:noticeId/delete",
            element: <DeleteNotice />
          },
          {
            path: "/admin/results",
            element: <AdminResults />
          },
          {
            path: "/admin/results/create",
            element: <CreateResult />
          },
          {
            path: "/admin/results/:resultId/edit",
            element: <EditResult />
          },
          {
            path: "/admin/results/:resultId/delete",
            element: <DeleteResult />
          }
        ],
      },
    ],
  },

]);


// =====================================
// Start React
// =====================================

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="bottom-center" />
  </StrictMode>
);