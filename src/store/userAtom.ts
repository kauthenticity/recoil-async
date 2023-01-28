import {atom, selector} from 'recoil';
import {getUserById} from '../api/userService';

export const currentUserIdState = atom({
    key: 'CurrentUserId',
    default: 1,
});

export const currentUserNameQuery = selector({
    key: 'CurrentUserName',
    get: async ({get}) => {
        const {data} = await getUserById({userId: get(currentUserIdState)});

        return data.name;
    },
});
