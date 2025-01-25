import { t } from 'i18next';
import { ReactNode } from 'react';

import { Button } from '@/components/ui/button';

export type FeatureKey =
  | 'PROJECTS'
  | 'BRANDING'
  | 'PIECES'
  | 'TEMPLATES'
  | 'TEAM'
  | 'GLOBAL_CONNECTIONS'
  | 'USERS'
  | 'API'
  | 'SSO'
  | 'AUDIT_LOGS'
  | 'ENVIRONMENT'
  | 'ISSUES'
  | 'ANALYTICS'
  | 'ALERTS'
  | 'ENTERPRISE_PIECES'
  | 'UNIVERSAL_AI'
  | 'SIGNING_KEYS'
  | 'CUSTOM_ROLES';

type RequestTrialProps = {
  featureKey: FeatureKey;
  customButton?: ReactNode;
};
export const RequestTrial = ({
  customButton = t('Contact Sales'),
}: RequestTrialProps) => {
  return (
    <Button
      onClick={() =>
        window.open('https://www.activepieces.com/sales', '_blank')
      }
    >
      {customButton}
    </Button>
  );
};
