import Image from 'next/image';
import { Inter } from 'next/font/google';
import FormBox from 'src/components/ui/form/FormBox';
import FormArticle from 'src/components/ui/form/FormArticle';
import { FormRow } from 'src/components/ui/form/shared/FormStyled';
import FormCell from 'src/components/ui/form/shared/FormCell';
import { Box, Checkbox, InputLabel, TextField, Typography } from '@mui/material';
import FormRadioElement from 'src/components/ui/form/elements/FormRadioElement';
import { useState } from 'react';
import { Address } from 'react-daum-postcode/lib/loadPostcode';
import AddressInput from 'src/components/common/AddressInput';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [addr, setAddr] = useState<Address>();
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <FormBox onSubmit={() => {}}>
        <FormArticle title={'기본정보'} unMask={() => {}}>
          <FormRow>
            <FormCell label="일반거래 신청서 상품코드">
              <Typography>테스트 상품</Typography>
            </FormCell>
          </FormRow>
          <FormRow>
            <FormCell label="사용여부" htmlFor="useYn">
              <FormRadioElement
                id="useYn"
                options={[
                  { name: '사용', value: 'Y' },
                  { name: '미사용', value: 'N' },
                ]}
              />
            </FormCell>
          </FormRow>
          <FormRow>
            <FormCell label="상품명">
              <Typography>테스트 상품</Typography>
            </FormCell>
            <FormCell label="상품명" htmlFor="test">
              <TextField id="test" />
            </FormCell>
          </FormRow>
          <FormRow>
            <FormCell label="상품명">
              <Box>
                <Typography>테스트 상품</Typography>
                <Typography color="warning.main">테스트 상품</Typography>
              </Box>
            </FormCell>
          </FormRow>
          <FormRow>
            <FormCell label="자사 분담률" htmlFor="per">
              <TextField id="per" disabled />
            </FormCell>
          </FormRow>
        </FormArticle>
        <FormArticle title={'기본정보'}>
          <FormRow>
            <FormCell label="일반거래 신청서 상품코드">
              <Typography>테스트 상품</Typography>
            </FormCell>
          </FormRow>
          <FormRow>
            <FormCell label="사용여부" htmlFor="useYn">
              <FormRadioElement
                id="useYn"
                options={[
                  { name: '사용', value: 'Y' },
                  { name: '미사용', value: 'N' },
                ]}
              />
            </FormCell>
          </FormRow>
          <FormRow>
            <FormCell label="판매가격" htmlFor="price">
              <TextField name="price" /> 원
            </FormCell>
            <FormCell label="판매 기간">
              <Checkbox size="medium" id="checked"></Checkbox>
              <InputLabel sx={{ marginRight: '24px' }} htmlFor="checked">
                제한
              </InputLabel>
              <TextField />
            </FormCell>
          </FormRow>
          <FormRow>
            <FormCell label="상품명">
              <Box>
                <Typography>테스트 상품</Typography>
                <Typography color="warning.main">테스트 상품</Typography>
              </Box>
            </FormCell>
          </FormRow>
          <FormRow>
            <FormCell label="자사 분담률" htmlFor="per">
              <TextField id="per" disabled /> %
            </FormCell>
          </FormRow>
          <FormRow>
            <FormCell label="주소">
              <AddressInput
                onChange={(arg) => setAddr(arg)}
                address={addr?.address}
                zipCode={addr?.zonecode}
              />
            </FormCell>
          </FormRow>
        </FormArticle>
      </FormBox>

      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/pages/index.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
