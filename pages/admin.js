import dynamic from 'next/dynamic'
import config from '../cms.config'
import Admin from '../components/layout/Admin'
import Insight from '../components/cms/Insight'


// This page contains the Netlify CMS backend
const AdminPage = dynamic(
  // Only import netlify-cms-app on the front end because it needs the window object 
  () => import('netlify-cms-app').then((cms) => {
    // Use the local Git repository if running in dev mode
    if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
      config.local_backend = true;
    }

    // Manually initialise Netlify CMS
    window.CMS_MANUAL_INIT = true
    cms.init({ config });

    // Provide a custom component and styling to preview insights
    cms.registerPreviewStyle('/admin/preview.css')
    cms.registerPreviewTemplate('insights', Insight)

  }),
  {
    ssr: false,
    loading() { return <div className="text-center my-5"><h2>Loading...</h2></div> }
  }
);


AdminPage.Layout = Admin

export default AdminPage;