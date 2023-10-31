import { lazy } from 'react';

export enum ErrorCase {
  ERROR_EXCEPTION = 'ERROR_EXCEPTION',
  ERROR_PAGE_NOT_FOUND = 'ERROR_PAGE_NOT_FOUND',
}

const Exception = lazy(() => import('src/components/common/error/Exception'));
const NotFound = lazy(() => import('src/components/common/error/NotFound'));

const ErrorComponent = {
  ERROR_EXCEPTION: <Exception />,
  ERROR_PAGE_NOT_FOUND: <NotFound />,
};

type ErrorProps = {
  errorCase?: ErrorCase;
};

const ErrorWrapper = ({
  errorCase = ErrorCase.ERROR_EXCEPTION,
}: ErrorProps) => {
  return ErrorComponent[errorCase];
};

export default ErrorWrapper;
