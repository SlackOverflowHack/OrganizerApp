import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useMemo,
    useState
} from 'react';
import React from 'react';
import {
    User,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { auth } from '../firebaseConfig';

const AuthContext = createContext({
    user: null,
    login: async (a, b) => { },
    register: async (a, b) => { },
    logout: async () => { },
    loading: true
});

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        return auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });
    }, [user]);

    const login = useMemo(
        () => async (email, password) => {
            try {
                await signInWithEmailAndPassword(auth, email, password);
            } catch (err) {
                console.log(err);
            }
        },
        []
    );
    const register = useMemo(
        () => async (email, password) => {
            await createUserWithEmailAndPassword(auth, email, password);
        },
        []
    );
    const logout = useMemo(
        () => () => {
            return signOut(auth).catch((err) => alert(err.message));
        },
        []
    );

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                register,
                logout,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default function useAuth() {
    return useContext(AuthContext);
}