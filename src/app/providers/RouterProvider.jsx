import {BrowserRouter} from "react-router-dom";

import App from "@/App";

export default function RouterProvider(){
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
}