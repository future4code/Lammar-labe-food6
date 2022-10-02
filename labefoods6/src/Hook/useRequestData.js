import { useState } from "react";
import axios from 'axios'
import { BASE_URL } from "../Constants";
import { goToLogin } from "../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useRequestData = () => {
    const navigate=useNavigate();

    const [isLoading, setIsLoading] = useState(false)
    const token = localStorage.getItem("token")


    return [isLoading, setIsLoading,]
}
