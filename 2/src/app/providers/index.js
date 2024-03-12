import compose from 'compose-function';

import { withRouter } from './with-router.jsx';
import { withBoundary } from './with-boundary.jsx';

export const withProviders = compose(withRouter, withBoundary);