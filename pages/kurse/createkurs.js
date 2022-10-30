import { PaperClipIcon } from "@heroicons/react/20/solid";
import MySidebar from "../../components/general/MySidebar";
import PageActions from "../../components/general/PageActions";

export default function createkurs() {
    return (
        <div className="min-h-full">
            <MySidebar></MySidebar>

            {/* Main column */}
            <div className="flex flex-col lg:pl-64">
                <main className="flex-1">
                    {/* Page title & actions */}

                    {/* Main COntent now  */}

                    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6">
                            <h3 className="text-lg font-medium leading-6 text-gray-900">
                                Kurserstellung
                            </h3>
                            <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                Erstellen Sie Ihren Kurs jetzt!
                            </p>
                        </div>
                        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                            <dl className="sm:divide-y sm:divide-gray-200">
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Kursname
                                    </dt>
                                    <div>
                                        <label htmlFor="email" className="sr-only">
                                            Kursname
                                        </label>
                                        <input
                                            type="text"
                                            name="kursname"
                                            id="kursname"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="z.B. Fußball"
                                        />
                                    </div>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Datum</dt>

                                    <div>
                                        <label htmlFor="email" className="sr-only">
                                            KursDatum
                                        </label>
                                        <input
                                            type="date"
                                            name="kursdatum"
                                            id="kursdatum"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="30.10.2022"
                                        />
                                    </div>
                                </div>

                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Beschreibung
                                    </dt>

                                    <div>
                                        <label htmlFor="email" className="sr-only">
                                            KursBeschreibung
                                        </label>
                                        <textarea
                                            type="text"
                                            name="description"
                                            id="description"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Hier könnte eine gute Beschreibung stehen..."
                                        />
                                    </div>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">Ort</dt>

                                    <div>
                                        <label htmlFor="email" className="sr-only">
                                            KursOrt
                                        </label>
                                        <textarea
                                            type="text"
                                            name="kursort"
                                            id="kursort"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder=""
                                        />
                                    </div>
                                </div>
                                <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-6">
                                    <dt className="text-sm font-medium text-gray-500">
                                        Maximale Teilnehmeranzahl
                                    </dt>
                                    <div>
                                        <label htmlFor="email" className="sr-only">
                                            Max Teilnehmerzahl
                                        </label>
                                        <textarea
                                            type="number"
                                            name="maxamount"
                                            id="maxamount"
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            placeholder=""
                                        />
                                    </div>
                                </div>

                                <button class="ml-6 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-green-700 rounded-lg focus:shadow-outline hover:bg-green-800 shadow-sm">
                                    Jetzt erstellen!
                                </button>
                            </dl>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
