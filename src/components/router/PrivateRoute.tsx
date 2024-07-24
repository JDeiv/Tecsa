import { Navigate, Outlet } from 'react-router-dom';
import { LOGIN } from '../../router/paths';

const PrivateRoute = () => {
    const isAuthenticated: boolean = false;

    if (!isAuthenticated) {
        return <Navigate to={LOGIN} />;
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PrivateRoute