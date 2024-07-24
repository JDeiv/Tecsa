import { Navigate, Outlet } from 'react-router-dom';
import { PRIVATE } from '../../router/paths';

const PublicRoute = () => {
    const isAuthenticated: boolean = false;
    console.log('pasa por hoc public')

    if (isAuthenticated) {
        return <Navigate to={PRIVATE} />;
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}

export default PublicRoute