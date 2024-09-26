import React from 'react';
import { useParams } from 'react-router-dom';
import SignIn from '../../screens/SignIn';

const UrlUser = () => {
    const { username } = useParams();

    return (
        <div>
            <SignIn />
        </div>
    );
};

export default UrlUser;
