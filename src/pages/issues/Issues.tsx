import Breadcrumb from '../../components/Breadcrumb'
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, Home01Icon } from '@hugeicons/core-free-icons';
import { NavLink } from "react-router";
import { useSearchParams } from 'react-router-dom';
import VerticalDivider from '../../components/Divider/VerticialDivider';


const Links = [
    {
        "title": "Issues",
        "href": "/"
    },
];

const options = [{
    "title": "asd1",
    "value": "asd"
}];


export default function Issues() {
    const [searchParams, setSearchParams] = useSearchParams();

    const currentState = searchParams.get('state');

    return (
        <>
            <Breadcrumb links={Links} />
            <div className='flex justify-between p-1 border-b-1 mb-3'>

                <div className="flex gap-4">
                    <NavLink
                        key="open"
                        to="/issues"
                        className="text-sm/6 font-semibold text-gray-900"
                    >Open
                    </NavLink>
                    <NavLink
                        key="closed"
                        to="/issues?state=closed"
                        className={`text-sm/6 font-semibold p-1 transition-colors ${currentState === 'closed'
                            ? 'text-gray-900 bg-gray-300 rounded-md'
                            : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >Closed
                    </NavLink>
                    <NavLink
                        key="all"
                        to="/issues?state=all"
                        className={`text-sm/6 font-semibold p-1 transition-colors ${currentState === 'all'
                            ? 'text-gray-900 bg-gray-300 rounded-md'
                            : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >All
                    </NavLink>
                </div>
                <div className="flex gap-3">
                    <button className=''>
                        Bulk edit
                    </button>
                    <button className=''>
                        New item
                    </button>
                </div>

            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center gap-1 max-w-2xl ">
                    <HugeiconsIcon
                        icon={Home01Icon}
                        size={24}
                        color="#000000"
                        strokeWidth={1.5}
                        className="items-center"
                    />
                    <h1 className="text-3xl text-center font-semibold">Track bugs, plan features, and organize your work with issues</h1>
                    <p>
                        Use issues (also known as tickets or stories on other platforms) to collaborate on ideas, solve problems, and plan your project.
                    </p>
                    <div className="flex gap-4">
                        <button className=''>
                            New item
                        </button>
                    </div>
                </div>
                <div className="border-t">
                    <div className="flex flex-row">
                        <div>
                            Using Jira for issue tracking?
                            <a href="">
                                See integration options
                            </a>
                        </div>
                        <div>
                            <a href="">
                                See integration options
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex h-10 items-center">
                <div className="">
                    Bulk edit Bulk edit
                </div>
                <VerticalDivider className="mx-2 border-red-500 border-r-4" />
                <div>
                    New item
                </div>
            </div>
        </>
    )
}