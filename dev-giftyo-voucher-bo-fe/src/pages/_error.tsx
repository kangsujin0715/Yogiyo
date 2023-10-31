import { NextPageWithLayout } from 'src/pages/_app';
import { ReactElement } from 'react';
import ErrorWrapper, {
  ErrorCase,
} from 'src/components/common/error/ErrorWrapper';

const ErrorPage: NextPageWithLayout = () => {
  return <ErrorWrapper errorCase={ErrorCase.ERROR_EXCEPTION} />;
};

ErrorPage.getLayout = (page: ReactElement) => {
  return page;
};

export default ErrorPage;
