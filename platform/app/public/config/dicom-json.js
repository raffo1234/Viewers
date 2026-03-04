// @ts-expect-error - OHIF config is injected at runtime
window.config = {
  routerBasename: '/',
  showStudyList: true,
  extensions: [],
  modes: [],
  dataSources: [
    {
      friendlyName: 'Cadia DICOMWeb',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        name: 'Cadia',
        // ¡IMPORTANTE!: Estas URLs deben ser de producción
        wadoUriRoot: 'https://cadia.pe/api/dicomweb',
        qidoRoot: 'https://cadia.pe/api/dicomweb',
        wadoRoot: 'https://cadia.pe/api/dicomweb',
        qidoSupportsIncludeField: true,
        supportsReject: false,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: false,
        supportsWildcard: false,
      },
    },
  ],
  defaultDataSourceName: 'dicomweb',
};
