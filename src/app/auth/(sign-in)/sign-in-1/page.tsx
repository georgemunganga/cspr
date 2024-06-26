import Image from 'next/image';
import bg from "@public/bg.jpg"
import SignInForm from './sign-in-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import UnderlineShape from '@/components/shape/underline';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Sign In 1'),
};

export default function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
          Welcome back! Please{' '}
          <span className="relative inline-block">
            Sign in to
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-24 text-blue md:w-28 xl:-bottom-1.5 xl:w-36" />
          </span>{' '}
          continue.
        </>
      }
      description="By signing in, you will gain access to monitored data, statistics and updates."

      bannerTitle="Monitoring Impact: Tracking Change in People's Lives."
      bannerDescription="Monitoring Impact: Tracking Change in People's Lives through an Interactive Analytics Dashboard, providing real-time insights and feedback loops to drive meaningful outcomes.."
      isSocialLoginActive={true}
      pageImage={
        <div className="relative mx-auto aspect-[4/3.37] w-[500px] xl:w-[620px] 2xl:w-[820px]">
          <Image
            src={ bg } style={{ borderRadius: "2rem"}}
            alt="Sign Up Thumbnail"
            fill
            priority
            sizes="(max-width: 768px) 100vw"
            className="object-cover"
          />
        </div>
      }
    >
      <SignInForm />
    </AuthWrapperOne>
  );
}
