import { Link } from 'react-router-dom';
import { Boulder } from '../types/boulder';

export type RouteCardProps = Boulder & {
  image: string;
  isCollapsed?: boolean;
};

export function BoulderCard({ name, grade, author, id, image, isCollapsed }: RouteCardProps) {
  return (
    <div key={`route-${id}`} className="card card-side mb-5 bg-base-100 shadow-xl">
      <figure className="w-1/4">
        <img src={`src/assets/img/${image}`} width="100px" alt="United" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          By <strong>{author.person.username}</strong>
        </p>
        <p>
          Graded for <strong>{grade}</strong>
        </p>
        {!isCollapsed && (
          <div className="card-actions justify-end">
            <button className="btn-outline btn-disabled btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-1 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              0
            </button>

            {/* <Link to={`/route/${id}`} className="link-hover label-text-alt link"> */}
            {/*  <button className="btn-outline btn"> */}
            {/*    <svg */}
            {/*      xmlns="http://www.w3.org/2000/svg" */}
            {/*      viewBox="0 0 24 24" */}
            {/*      className="mr-1 h-6 w-6" */}
            {/*      fill="currentColor" */}
            {/*    > */}
            {/*      <path d="M1.75 1h12.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 14.25 14H8.061l-2.574 2.573A1.458 1.458 0 0 1 3 15.543V14H1.75A1.75 1.75 0 0 1 0 12.25v-9.5C0 1.784.784 1 1.75 1ZM1.5 2.75v9.5c0 .138.112.25.25.25h2a.75.75 0 0 1 .75.75v2.19l2.72-2.72a.749.749 0 0 1 .53-.22h6.5a.25.25 0 0 0 .25-.25v-9.5a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25Z" /> */}
            {/*      <path d="M22.5 8.75a.25.25 0 0 0-.25-.25h-3.5a.75.75 0 0 1 0-1.5h3.5c.966 0 1.75.784 1.75 1.75v9.5A1.75 1.75 0 0 1 22.25 20H21v1.543a1.457 1.457 0 0 1-2.487 1.03L15.939 20H10.75A1.75 1.75 0 0 1 9 18.25v-1.465a.75.75 0 0 1 1.5 0v1.465c0 .138.112.25.25.25h5.5a.75.75 0 0 1 .53.22l2.72 2.72v-2.19a.75.75 0 0 1 .75-.75h2a.25.25 0 0 0 .25-.25v-9.5Z" /> */}
            {/*    </svg> */}
            {/*    feedback */}
            {/*  </button> */}
            {/* </Link> */}
          </div>
        )}
      </div>
    </div>
  );
}
