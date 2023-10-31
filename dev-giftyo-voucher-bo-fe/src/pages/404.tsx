import { NextPageWithLayout } from 'src/pages/_app';
import { ReactElement } from 'react';
import ErrorWrapper, {
  ErrorCase,
} from 'src/components/common/error/ErrorWrapper';

const NotFoundPage: NextPageWithLayout = () => {
  return <ErrorWrapper errorCase={ErrorCase.ERROR_PAGE_NOT_FOUND} />;
};

NotFoundPage.getLayout = (page: ReactElement) => {
  return page;
};

export default NotFoundPage;
