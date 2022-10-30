import React from 'react'
import { useRouter } from 'next/router';

function PageActions() {
    const router = useRouter();

    let routeName = ''
    if(router.pathname == '/kurse/past') routeName = 'Verganene Kurse';
    else if(router.pathname == '/kurse') routeName = 'Aktuelle Kurse';

    return (
        <div>

            <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <div className="min-w-0 flex-1">
                    <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">{routeName}</h1>
                </div>
                <div className="mt-4 flex sm:mt-0 sm:ml-4">
                    <button
                        onClick={() => router.push("/kurse/createkurs")}
                        type="button"
                        className="order-0 inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:order-1 sm:ml-3"
                    >
                        Erstellen
                    </button>
                </div>
            </div>

        </div>
    )
}

export default PageActions