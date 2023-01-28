import {fetcher} from './fetcher';

type TGetUser = {
    userId: number;
};

export const getUserById = async ({userId}: TGetUser) => {
    return fetcher.get(`/users/${userId}`);
};
