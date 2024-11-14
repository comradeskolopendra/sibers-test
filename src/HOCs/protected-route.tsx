import { useAppSelector } from "@/store/hooks";
import { getStateUser } from "@/store/selectors/login-selectors";
import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface RouteProps {
    children: ReactNode;
}

// HOC for protect pages from auth or unauth users
const Route = (isProtected: boolean): FC<RouteProps> => ({ children }) => {
    const user = useAppSelector(getStateUser);

    if (isProtected && user === "") {
        return <Navigate to={"/auth"} />
    }

    if (!isProtected && user !== "") {
        return <Navigate to={"/"} />
    }

    return children;
};

// Protect from unauth users
export const ProtectedRoute = Route(true);

// Protect from auth users. Pages like auth, registration and other
export const UnProtectedRoute = Route(false);