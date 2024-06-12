import { Helmet } from 'react-helmet-async';

import { ReviewsView } from 'src/sections/reviews/view';

// ----------------------------------------------------------------------

export default function ReviewsPage() {
  return (
    <>
      <Helmet>
        <title> Blog | Minimal UI </title>
      </Helmet>

      <ReviewsView />
    </>
  );
}