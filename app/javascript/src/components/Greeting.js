import React from "react";
import { useGetMessageQuery } from "./api/greetingsdata";

const Greeting = () => {
    const { data, error, isLoading } = useGetMessageQuery();
    if(isLoading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>{error}</p>
    }
    if(data){
        return <h1>{data.message}</h1>
    }
    <p>...</p>
}

export default Greeting;