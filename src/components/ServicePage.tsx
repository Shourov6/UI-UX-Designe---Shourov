import React from 'react';
import { UXResearchPage } from './UXResearchPage';
import { UIDesignPage } from './UIDesignPage';
import { ProductDesignPage } from './ProductDesignPage';

interface ServicePageProps {
  serviceId: 'ux-research' | 'ui-design' | 'product-design';
  onBack: () => void;
  onNavigateToService?: (serviceId: 'ux-research' | 'ui-design' | 'product-design') => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({ serviceId, onBack, onNavigateToService }) => {
  if (serviceId === 'ux-research') {
    return <UXResearchPage onBack={onBack} onExploreUIDesign={() => onNavigateToService?.('ui-design')} />;
  }

  if (serviceId === 'ui-design') {
    return <UIDesignPage onBack={onBack} onExploreUXResearch={() => onNavigateToService?.('ux-research')} />;
  }

  if (serviceId === 'product-design') {
    return <ProductDesignPage 
      onBack={onBack} 
      onExploreUXResearch={() => onNavigateToService?.('ux-research')} 
      onExploreUIDesign={() => onNavigateToService?.('ui-design')}
    />;
  }

  return null;
};
