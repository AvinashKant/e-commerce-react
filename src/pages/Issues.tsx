import Breadcrumb from '../components/Breadcrumb'

import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon, Home01Icon } from '@hugeicons/core-free-icons';
const Links = [
    {
        "title": "Issues",
        "href": "/"
    },
];

export default function Issues() {
    return (
        <>
            <Breadcrumb links={Links} />
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center gap-1 max-w-2xl">
                    <HugeiconsIcon
                        icon={Home01Icon}
                        size={24}
                        color="#000000"
                        strokeWidth={1.5}
                        className="items-center"
                    />
                    <h1>Track bugs, plan features, and organize your work with issues</h1>
                    <p>
                        Use issues (also known as tickets or stories on other platforms) to collaborate on ideas, solve problems, and plan your project.
                    </p>
                    <div className="flex gap-4">
                        <button className=''>
                            New item
                        </button>
                        <button>
                            Import issues
                        </button>
                    </div>
                </div>
                <div>
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
        </>

    )
}