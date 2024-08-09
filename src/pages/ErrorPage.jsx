import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)
    return (
        <div>
            <h3> 404 - Not Found</h3>
            <p>Whoops- you seem to be in the wrong place</p>
        </div>
    )
}

export default ErrorPage;