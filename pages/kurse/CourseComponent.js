import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import MySidebar from "../../components/general/MySidebar";
import PageActions from "../../components/general/PageActions";
import useAuth from "../../hooks/useAuth";
import { collection, query, getDocs } from "@firebase/firestore";
import { firebaseDb } from "../../firebaseConfig";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CourseComponent() {
  const { user } = useAuth();
  const [courses, setCourses] = useState([]);

  const fetchCourses = async () => {
    const q = query(collection(firebaseDb, "courses"));

    const querySnapshot = await getDocs(q);

    let tmpCourses = [];

    querySnapshot.forEach((doc) => {
      tmpCourses.push(doc.data());
    });

    setCourses(tmpCourses);
  };

  useEffect(() => {
    if (user) {
      fetchCourses();
    }
  }, [user]);

  return (
    <>
      <div className="min-h-full">
        <MySidebar></MySidebar>

        {/* Main column */}
        <div className="flex flex-col lg:pl-64">
          <main className="flex-1">
            {/* Page title & actions */}
            <PageActions></PageActions>

            {/* Projects list (only on smallest breakpoint) */}
            <div className="mt-10 sm:hidden">
              <div className="px-4 sm:px-6">
                <h2 className="text-sm font-medium text-gray-900">Projects</h2>
              </div>
              <ul
                role="list"
                className="mt-3 divide-y divide-gray-100 border-t border-gray-200"
              >
                {courses.map((course) => (
                  <li key={course.id}>
                    <a
                      href="#"
                      className="group flex items-center justify-between px-4 py-4 hover:bg-gray-50 sm:px-6"
                    >
                      <span className="flex items-center space-x-3 truncate">
                        <span
                          className={classNames(
                            course.bgColorClass,
                            "w-2.5 h-2.5 flex-shrink-0 rounded-full"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate text-sm font-medium leading-6">
                          {course.titel}{" "}
                          <span className="truncate font-normal text-gray-500">
                            in {course.organization}
                          </span>
                        </span>
                      </span>
                      <ChevronRightIcon
                        className="ml-4 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects table (small breakpoint and up) */}
            <div className="mt-8 hidden sm:block">
              <div className="inline-block min-w-full border-b border-gray-200 align-middle">
                <table className="min-w-full">
                  <thead>
                    <tr className="border-t border-gray-200">
                      <th
                        className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        <span className="lg:pl-2">Kursname</span>
                      </th>
                      <th
                        className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        Kursleitung
                      </th>
                      <th
                        className="border-b border-gray-200 bg-gray-50 px-6 py-3 text-left text-sm font-semibold text-gray-900"
                        scope="col"
                      >
                        Interessiert
                      </th>
                      <th
                        className="hidden border-b border-gray-200 bg-gray-50 px-6 py-3 text-right text-sm font-semibold text-gray-900 md:table-cell"
                        scope="col"
                      >
                        Mitglieder
                      </th>
                      <th
                        className="border-b border-gray-200 bg-gray-50 py-3 pr-6 text-right text-sm font-semibold text-gray-900"
                        scope="col"
                      />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    {courses.map((cs) => (
                      <tr key={cs.id}>
                        <td className="w-full max-w-0 whitespace-nowrap px-6 py-3 text-sm font-medium text-gray-900">
                          <div className="flex items-center space-x-3 lg:pl-2">
                            <div
                              className={classNames(
                                cs.bgColorClass,
                                "flex-shrink-0 w-2.5 h-2.5 rounded-full"
                              )}
                              aria-hidden="true"
                            />
                            <a
                              href="#"
                              className="truncate hover:text-gray-600"
                            >
                              <span>{cs.titel}</span>
                            </a>
                          </div>
                        </td>
                        <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                          {cs.kontakt.vorname} &nbsp; {cs.kontakt.name}
                        </td>
                        <td className="px-6 py-3 text-sm font-medium text-gray-500">
                          <div className="flex items-center space-x-2">
                            <div className="flex flex-shrink-0 -space-x-1">
                              {cs.interestedMembers.length}
                            </div>
                          </div>
                        </td>
                        <td className="hidden whitespace-nowrap px-6 py-3 text-right text-sm text-gray-500 md:table-cell">
                          {cs.permanentMembers.length}
                        </td>
                        <td className="whitespace-nowrap px-6 py-3 text-right text-sm font-medium">
                          <Link
                            href="/kurse/kursdetails"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Verwalten
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
