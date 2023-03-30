import { ErrorProps } from "next/error";

export function Error({error}:{error:ErrorProps}) {
    return <div>
        <h1>{error.title}</h1>
    </div>
}