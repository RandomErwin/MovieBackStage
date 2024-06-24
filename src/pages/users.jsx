import { Helmet } from 'react-helmet-async';

import { UsersView } from 'src/sections/users/view';

// ----------------------------------------------------------------------

export default function UsersPage() {
  return (
    <>
      <Helmet>
        <title> 會員列表 | Taishow </title>
      </Helmet>

      <UsersView />
    </>
  );
}
