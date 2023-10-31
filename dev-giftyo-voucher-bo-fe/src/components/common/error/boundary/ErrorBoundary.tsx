import React, { ComponentType, ReactNode } from 'react';
import { FEApiResponse } from 'src/interface/responseData';

export interface FallBackProps {
  isRefresh?: boolean;
  message?: string;
  onReset?: () => void;
  onRefresh?: () => void;
}

export interface ErrorBoundaryProps {
  isRefresh?: boolean;
  fallback: ComponentType<FallBackProps>;
  message?: string;
  onReset?: () => void;
  children?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  info: FEApiResponse<null> | null;
}

const initialState: ErrorBoundaryState = {
  hasError: false,
  info: null,
};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    const err = error as unknown as FEApiResponse<null>;
    console.log('getDerivedStateFromError error = ', err);
    return { hasError: true, info: err };
  }

  onResetErrorBoundary = () => {
    this.props.onReset?.();
    this.reset();
  };

  reset = () => {
    this.setState(initialState);
  };

  render() {
    const { hasError, info } = this.state;
    const { children, message, isRefresh } = this.props;

    if (hasError) {
      const props = {
        error: info,
        onResetErrorBoundary: this.onResetErrorBoundary,
      };
      return (
        <this.props.fallback
          isRefresh={isRefresh}
          onRefresh={this.reset}
          onReset={props.onResetErrorBoundary}
          message={info?.message}
        />
      );
    }
    return children;
  }
}

export default ErrorBoundary;
