import { PaperClipIcon } from '@heroicons/react/20/solid'
import MySidebar from '../../components/general/MySidebar'

export default function kursdetails(specialKurs) {

    return (

        <div className="min-h-full">

            <MySidebar></MySidebar>

            {/* Main column */}
            <div className="flex flex-col lg:pl-64">

                <main className="flex-1">
                    {/* Page title & actions */}
                    <div className="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                        <div className="min-w-0 flex-1">
                            <h1 className="text-lg font-medium leading-6 text-gray-900 sm:truncate">Startseite</h1>
                        </div>
                        <div className="mt-4 flex sm:mt-0 sm:ml-4">
                            <button
                                type="button"
                                className="sm:order-0 order-1 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:ml-0"
                            >
                                Teilen
                            </button>
                            <button
                                type="button"
                                className="order-0 inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 sm:order-1 sm:ml-3"
                            >
                                Erstellen
                            </button>
                        </div>
                    </div>
                    {/* Main COntent now  */}


                    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">Kursdetails</h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">Erweiterte Details zum Kurs anzeigen und ändern</p>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                            <dl className="sm:divide-y sm:divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500"> {specialKurs.Name}</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Karate Kurs</dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Application for</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Backend Developer</dd>
                                </div>

                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Email address</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Salary expectation</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">$120,000</dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">About</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur
                                        qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
                                        pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                    </dd>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Attachments</dt>
                                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                        <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                <div className="flex w-0 flex-1 items-center">
                                                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                    <span className="ml-2 w-0 flex-1 truncate">resume_back_end_developer.pdf</span>
                                                </div>
                                                <div className="ml-4 flex-shrink-0">
                                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Download
                                                    </a>
                                                </div>
                                            </li>
                                            <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                <div className="flex w-0 flex-1 items-center">
                                                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                    <span className="ml-2 w-0 flex-1 truncate">coverletter_back_end_developer.pdf</span>
                                                </div>
                                                <div className="ml-4 flex-shrink-0">
                                                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                        Download
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
