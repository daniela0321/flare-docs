import dynamic from 'next/dynamic';
import config from '../cms.config';
import Admin from '../components/layout/Admin'


const AdminPage = dynamic(
  () => import('netlify-cms-app').then((cms) => {
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
      config.local_backend = true;
    }
    window.CMS_MANUAL_INIT = true

    cms.init({ config });
  }),
  {
    ssr: false,
    loading() { return <div className="text-center my-5"><h2>Loading...</h2></div> }
  }
);


AdminPage.Layout = Admin

export default AdminPage;