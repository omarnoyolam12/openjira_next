import { useContext } from "react";
import { UIContext } from "@/context/ui";

const useUI = ()=>{
    return useContext(UIContext);
}

export default useUI;
