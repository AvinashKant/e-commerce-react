import { NavLink, useRouteError, isRouteErrorResponse } from 'react-router';

export default function ErrorPage() {
  const error = useRouteError();

  console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h2 className="mt-6 text-base leading-7 text-gray-600">
              Sorry, an unexpected error has occurred.
            </h2>
            <h3 className="text-base text-3xl font-semibold text-indigo-600">
              {error.status} {error.statusText}
            </h3>
            <h4 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {error.data}
            </h4>
          </div>
        </main>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h2 className="mt-6 text-base leading-7 text-gray-600">
              Sorry, an unexpected error has occurred.
            </h2>
            <h4 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {error.message}
            </h4>

            <p className="mt-4">The stack trace is:</p>
            <pre>{error.stack}</pre>
          </div>
        </main>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }

  return (
    <div id="error-page" className="">
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">{error.status}</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {error.statusText || error.message}
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, an unexpected error has occurred.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <NavLink
              to={`/`}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Back to home
            </NavLink>
          </div>
        </div>
      </main>
    </div>
  );
}
