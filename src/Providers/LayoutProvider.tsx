import Layout from '../components/Layout';
import routesConfig from '../core/AppRoutes/routeConfig';

const LayoutProvider = ({ children }: any) => {
  return <Layout routesConfig={routesConfig}>{children}</Layout>;
};

export default LayoutProvider;
