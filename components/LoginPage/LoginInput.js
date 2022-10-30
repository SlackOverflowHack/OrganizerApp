import { LockClosedIcon } from '@heroicons/react/20/solid'
import useAuth from '../../hooks/useAuth';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router'



export default function LoginInput() {

    const { login, register, user } = useAuth();
    const [email, setEmail] = useState('bob@ross.com');
    const [pwd, setPwd] = useState('Test_123');
    const router = useRouter()
    const formIncomplete = !(email && pwd);

    useEffect(() => {
        if (user) {
            // router navigate to home
            router.push('/');

        }
    }, [user])

    return (
        <>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 bg-gray-500 p-10 bg-opacity-60 border border-double shadow-md">
                    <div >
                        <img
                            className="mx-auto h-12.5  w-auto"
                            src='/logo.png'
                            alt="SportSwipe Logo"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-100">
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            {' '}
                            <a onClick={() => router.push("/register")} className="font-medium text-indigo-200 hover:text-indigo-50 cursor-pointer">
                                Noch kein Konto? Jetzt registrieren!
                            </a>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST">
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    E Mail Adresse
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Email Adresse"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Passwort
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-100">
                                    Angemeldet bleiben
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-200 hover:text-indigo-50">
                                    Passwort vergessen?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                onClick={() => {
                                    login(email, pwd);
                                }}
                            >

                                Anmelden
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
