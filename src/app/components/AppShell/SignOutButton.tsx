'use client';

import { useClerk } from '@clerk/clerk-react';
import ArrowLeftOnRectangleIcon from '@heroicons/react/24/outline/ArrowLeftOnRectangleIcon';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function SignOutButton() {
  const { signOut } = useClerk();
  return (
    <button
      type="button"
      onClick={() => signOut()}
      className={classNames(
        'text-white hover:bg-indigo-600 hover:bg-opacity-75',
        'group flex items-center rounded-md px-2 py-2 text-sm font-medium'
      )}
    >
      <ArrowLeftOnRectangleIcon
        className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300"
        aria-hidden="true"
      />
      Sign out
    </button>
  );
}
