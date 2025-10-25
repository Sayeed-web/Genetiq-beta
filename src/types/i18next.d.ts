import 'react-i18next';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: {
        dashboard: {
          title: string;
          welcome: string;
          tracker: string;
          age: string;
          concerns: string;
          systemDetail: string;
          riskAssessment: string;
        };
        common: {
          loading: string;
          error: string;
          save: string;
          cancel: string;
          close: string;
        };
      };
    };
  }
}