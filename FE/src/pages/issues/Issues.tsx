import Breadcrumb from '../../ui-library/Breadcrumb';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, Home01Icon } from '@hugeicons/core-free-icons';
import { NavLink } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import VerticalDivider from '../../components/Divider/VerticialDivider'; // Corrected typo in file name
import { Button } from '../../ui-library/avinash-react-component-library';

const Links = [
  {
    title: 'Issues',
    href: '/',
  },
];

const options = [
  {
    title: 'asd1',
    value: 'asd',
  },
];

export default function Issues() {
  const [searchParams] = useSearchParams();
  const currentState = searchParams.get("state");

  return (
    <>
      <Breadcrumb links={Links} />

      {/* ---------- HEADER ---------- */}
      <div className="flex justify-between items-center px-6 py-3 border-b border-gray-200 bg-white">
        
        {/* Tabs */}
        <div className="flex gap-6">
          <NavLink
            to="/issues"
            className={`pb-2 text-sm font-medium ${
              !currentState
                ? "border-b-2 border-blue-600 text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            Open
          </NavLink>

          <NavLink
            to="/issues?state=closed"
            className={`pb-2 text-sm font-medium border-b -mb-px ${
              currentState === "closed"
              ? "border-b-2 border-blue-600 text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
            
          >
            Closed
          </NavLink>

          <NavLink
            to="/issues?state=all"
            className={`pb-2 text-sm font-medium ${
              currentState === "all"
                ? "border-b-2 border-blue-600 text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
          >
            All
          </NavLink>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button title="Bulk edit" />
          <Button title="New item" variant="blue" className="text-sm" />
        </div>
      </div>

      {/* ---------- EMPTY STATE ---------- */}
      <div className="flex flex-col justify-center items-center mt-16 px-6">
        
        <HugeiconsIcon icon={Home01Icon} size={28} strokeWidth={1.5} />

        <h1 className="text-3xl font-semibold text-center mt-4">
          Track bugs, plan features, and organize your work with issues
        </h1>

        <p className="text-gray-600 text-center mt-2 max-w-xl">
          Use issues to collaborate on ideas, solve problems, and plan your project.
        </p>

        <div className="mt-5">
          <Button title="New item" variant="blue" />
        </div>
      </div>

      {/* ---------- INFO BAR ---------- */}
      <div className="mt-10 border-t py-4 px-6 flex justify-between text-sm text-gray-600">
        <div>
          Using Jira for issue tracking?
          <a className="text-blue-600 ml-1 hover:underline" href="">
            See integration options
          </a>
        </div>

        <a className="text-blue-600 hover:underline" href="">
          Learn more
        </a>
      </div>
    </>
  );
}
