import { Text } from 'rizzui';
import OtpForm from './otp-form';
import AuthWrapperOne from '@/app/shared/auth-layout/auth-wrapper-one';
import UnderlineShape from '@/components/shape/underline';
import Image from 'next/image';
import bg from "@public/bg.jpg"

export default function OtpPage() {
  return (
    <AuthWrapperOne
      title={
        <>
          Enter your{' '}
          <span className="relative inline-block">
            OTP.
            <UnderlineShape className="absolute -bottom-2 end-0 h-2.5 w-16 text-blue xl:-bottom-1 xl:w-24" />
          </span>
        </>
      }
      bannerTitle="Monitoring Impact: Tracking Change in People's Lives."
      bannerDescription="Amet minim mollit non deserunt ullamco est sit aliqua dolor do
    amet sint velit officia consequat duis."
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
      <Text className="-mt-1 mb-9 text-center text-[15px] leading-[1.85] text-gray-700 md:text-base md:!leading-loose lg:text-start xl:-mt-6">
        We have sent you One Time Password to your email.
      </Text>
      <OtpForm />
    </AuthWrapperOne>
  );
}
