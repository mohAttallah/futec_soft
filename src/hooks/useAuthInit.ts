import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkAndSetAuthFromStorage } from '../store/slices/appSlice';

export const useAuthInit = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAndSetAuthFromStorage() as any);
    }, [dispatch]);
};
