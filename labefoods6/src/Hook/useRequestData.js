import { useState } from "react";

export const useRequestData = () => {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(undefined)


    return [data,isLoading]
}
