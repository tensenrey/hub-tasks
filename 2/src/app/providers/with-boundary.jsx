import { ErrorBoundaryWidget } from '../../widgets/error-boundary/error-boundary.widget';
import { ErrorBoundary } from 'react-error-boundary';

export const withBoundary = (component) => () => (
  <ErrorBoundary fallback={<ErrorBoundaryWidget />}>
    {component()}
  </ErrorBoundary>
);
