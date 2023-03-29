import { SignUp } from '@clerk/nextjs/app-beta';

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center h-full">
      <SignUp />
    </div>
  );
}
