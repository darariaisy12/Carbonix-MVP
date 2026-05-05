import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { GeotagUpload } from './pages/GeotagUpload';
import { CarbonMarket } from './pages/CarbonMarket';
import { SystemicHarmony } from './pages/SystemicHarmony';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'geotag':
        return <GeotagUpload />;
      case 'market':
        return <CarbonMarket />;
      case 'impact':
        return <SystemicHarmony />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
