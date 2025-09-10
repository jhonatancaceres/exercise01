
import AppProviders from './providers/AppProviders';
import Layout from './components/ui/Layout/Layout';
import AppRoutes from './AppRoutes';

export default function App() {
  return (
    <AppProviders>
      <Layout>
        <AppRoutes />
      </Layout>
    </AppProviders>
  )
}

