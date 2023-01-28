import React from 'react';
import {useRecoilValue} from 'recoil';
import {currentUserNameQuery} from '../store/userAtom';

const CurrentUserInfo = () => {
    const userName = useRecoilValue(currentUserNameQuery);

    return <div>{userName}</div>;
};

export default CurrentUserInfo;
