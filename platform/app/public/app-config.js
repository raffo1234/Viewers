window['config'] = {
  routerBasename: '/',
  extensions: [],
  modes: [],
  showStudyList: true,
  defaultDataSourceName: 'dicomweb',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'DICOMweb',
        name: 'dicomweb',
        qidoRoot: 'https://cadia.pe/api/wado',
        wadoRoot: 'https://cadia.pe/api/wado',
        wadoUriRoot: 'https://cadia.pe/api/wado',
        qidoSupportsIncludeField: false,
        supportsReject: false,
        supportsFuzzyMatching: false,
        supportsWildcard: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
      },
    },
  ],
};
