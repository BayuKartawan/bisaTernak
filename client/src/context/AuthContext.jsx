import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );

    const login = async (inputs) => {
        await axios.post('http://127.0.0.1:8800/api/auth/login', inputs)
          .then(function (response) {
            localStorage.setItem('uuid', response.data?.uuid);
            setCurrentUser(response.data);

          })
          .catch(function (error) {
            console.log(error);
          });

    };

    const logout = async (inputs) => {
        await axios.post("/auth/logout");
        setCurrentUser(null);
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
