import { Helmet } from 'react-helmet-async';

import { RefundsView } from 'src/sections/refunds/view';

// ----------------------------------------------------------------------

export default function RefundsPage() {
  return (
    <>
      <Helmet>
        <title> 退款記錄 | TaiShow </title>
      </Helmet>

      <RefundsView />
    </>
  );
}
