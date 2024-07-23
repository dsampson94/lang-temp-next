import React, {ReactNode} from 'react';
import AppLayout from '../../components/AppLayout';

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout = ({children}: AuthLayoutProps) => {
    return <AppLayout>{children}</AppLayout>;
};

export default AuthLayout;
