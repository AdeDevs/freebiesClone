import { Link } from "react-router-dom";

function ErrorBoundary() {
    return (
        <>
        Page not found <Link to='/'>go back</Link>
        </>
    )
}

export default ErrorBoundary;