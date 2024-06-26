import ForgetPasswordForm from './forget-password-form';
import UnderlineShape from '@/components/shape/underline';
import Image from 'next/image';
import bg from "@public/bg.jpg"
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';

export default function SignIn() {
  return (
    <AuthWrapperOne
      title={
        <>
          Reset your{' '}
          <span className="relative inline-block">
            password!
            <UnderlineShape className="absolute -bottom-2 end-0 h-2.5 w-28 text-blue xl:-bottom-1.5 xl:w-36" />
          </span>
        </>
      }
      bannerTitle="Monitoring Impact: Tracking Change in People's Lives."
      bannerDescription="Monitoring Impact: Tracking Change in People's Lives through an Interactive Analytics Dashboard, providing real-time insights and feedback loops to drive meaningful outcomes.."
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
      <ForgetPasswordForm />
    </AuthWrapperOne>
  );
}
