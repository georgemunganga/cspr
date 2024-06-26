import Image from 'next/image';
import UnderlineShape from '@/components/shape/underline';
import SignUpForm from './sign-up-form';
import bg from "@public/bg.jpg"
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import { metaObject } from '@/config/site.config';

export const metadata = {
  ...metaObject('Sign Up 1'),
};

export default function SignUp() {
  return (
    <AuthWrapperOne
      title={
        <>
          Join us and never miss a thing -{' '}
          <span className="relative inline-block">
            SIGN UP!
            <UnderlineShape className="absolute -bottom-2 start-0 h-2.5 w-28 text-blue xl:-bottom-1.5 xl:w-36" />
          </span>
        </>
      }
      description="By signing up, you will gain access to monitored data, statistics and updates."
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
      <SignUpForm />
    </AuthWrapperOne>
  );
}
