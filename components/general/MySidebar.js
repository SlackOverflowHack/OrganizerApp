import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { ClockIcon, HomeIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {
    ChevronUpDownIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'

const navigation = [
    { name: 'Startseite', href: '/', icon: HomeIcon, current: true },
    { name: 'Vergangene Kurse', href: '/kurse/past', icon: ClockIcon, current: false },
]
//Get Data from Firebase?
const favorites = [
    { name: 'Karate-Kurs', href: '#', bgColorClass: 'bg-indigo-500' },
    { name: 'Yoga für Anfänger', href: '#', bgColorClass: 'bg-green-500' },
    { name: 'Fußball Freunde', href: '#', bgColorClass: 'bg-yellow-500' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function MySidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <div>
            {/* Static sidebar for desktop */}
            <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-gray-100 lg:pt-5 lg:pb-4">
                <div className="flex flex-shrink-0 items-center px-6">
                    <img
                        className="h-9 w-auto invert"
                        src="/logo.png"
                        alt="Your Company"
                    />
                </div>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="mt-6 flex h-0 flex-1 flex-col overflow-y-auto">
                    {/* User account dropdown */}
                    <Menu as="div" className="relative inline-block px-3 text-left">
                        <div>
                            <Menu.Button className="group w-full rounded-md bg-gray-100 px-3.5 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                <span className="flex w-full items-center justify-between">
                                    <span className="flex min-w-0 items-center justify-between space-x-3">
                                        <img
                                            className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                                            src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                                            alt=""
                                        />
                                        <span className="flex min-w-0 flex-1 flex-col">
                                            <span className="truncate text-sm font-medium text-gray-900">Rainer Winkler</span>
                                            <span className="truncate text-sm text-gray-500">@rwinkler</span>
                                        </span>
                                    </span>
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 left-0 z-10 mx-3 mt-1 origin-top divide-y divide-gray-200 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Profil ansehen
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Einstellungen
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Notifications
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Hol dir die Mobile-App!
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Logout
                                            </a>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                    {/* Sidebar Search */}
                    <div className="mt-5 px-3">
                        <label htmlFor="search" className="sr-only">
                            Suchen
                        </label>
                        <div className="relative mt-1 rounded-md shadow-sm">
                            <div
                                className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                aria-hidden="true"
                            >
                                <MagnifyingGlassIcon className="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="text"
                                name="search"
                                id="search"
                                className="block w-full rounded-md border-gray-300 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                placeholder="Suchen"
                            />
                        </div>
                    </div>
                    {/* Navigation */}
                    <nav className="mt-6 px-3">
                        <div className="space-y-1">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-200 text-gray-900' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50',
                                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    <item.icon
                                        className={classNames(
                                            item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                            'mr-3 flex-shrink-0 h-6 w-6'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="mt-8">
                            {/* Secondary navigation */}
                            <h3 className="px-3 text-sm font-medium text-gray-500" id="desktop-favorites-headline">
                                Favoriten
                            </h3>
                            <div className="mt-1 space-y-1" role="group" aria-labelledby="desktop-favorites-headline">
                                {favorites.map((team) => (
                                    <a
                                        key={team.name}
                                        href={team.href}
                                        className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                    >
                                        <span
                                            className={classNames(team.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full')}
                                            aria-hidden="true"
                                        />
                                        <span className="truncate">{team.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default MySidebar