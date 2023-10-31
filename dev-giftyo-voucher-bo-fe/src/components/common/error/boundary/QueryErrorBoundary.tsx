import React, { Suspense } from 'react';
import { QueryErrorResetBoundary } from 'react-query';
import ErrorBoundary, {
  FallBackProps,
} from 'src/components/common/error/boundary/ErrorBoundary';
import Loading from 'src/components/common/loading/Loading';
import ErrorWrapper, {
  ErrorCase,
} from 'src/components/common/error/ErrorWrapper';

export const QueryErrorBoundary = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={() => {
          console.warn('onReset called');
          reset();
        }}
        fallback={ErrorFallbackView}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);

// Error + retry
export const ErrorFallbackView = ({
  message,
  onReset,
  onRefresh,
}: FallBackProps) => {
  console.log('render ErrorFallbackView = ', message);

  return (
    <div>
      <ErrorWrapper errorCase={ErrorCase.ERROR_EXCEPTION} />

      <div>{message}</div>
      <button onClick={onReset}>Retry</button>
    </div>
  );
};
