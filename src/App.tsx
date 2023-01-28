import React from 'react';
import {RecoilRoot} from 'recoil';
import CurrentUserInfo from './components/CurrentUserInfo';

const App = () => {
    return (
        <RecoilRoot>
            <CurrentUserInfo />
        </RecoilRoot>
    );
};

export default App;
