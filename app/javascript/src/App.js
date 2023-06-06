import React from "react";
import { useGetMessageQuery } from "./api/greetingsdata";

const App = () => {
    const { data, error, isLoading } = useGetMessageQuery()
    if(error){
        console.log(error);
    }
    console.log(data);
    return <h1>Hello</h1>
}

export default App;