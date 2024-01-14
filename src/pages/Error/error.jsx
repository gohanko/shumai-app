import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();

    return (
        <div className="w-full bg-zinc-900 text-white border-solid border-t border-zinc-700">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}

export default Error;