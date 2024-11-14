import { ProtectedRoute, UnProtectedRoute } from "@/HOCs/protected-route";
import { createBrowserRouter } from "react-router-dom";
import { Auth, Main, Chat } from "@/pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Main />
            </ProtectedRoute>
        ),
        children: [
            {
                path: ":id",
                element: (
                    <Chat />
                )
            }
        ]
    },
    {
        path: "/auth",
        element: (
            <UnProtectedRoute>
                <Auth />
            </UnProtectedRoute>
        )
    },
    {
        path: "/profile",
        element: (
            <ProtectedRoute>
                <main>profile will be here</main>
            </ProtectedRoute>
        )
    }
])