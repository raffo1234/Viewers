// @ts-expect-error - No types for this file
window.config = {
  routerBasename: '/',
  extensions: [],
  modes: [],
  customizationService: {},
  showStudyList: false, // Para que entre directo al visor
  maxNumberOfWebWorkers: navigator.hardwareConcurrency || 4,
  // AQUÍ ESTÁ LA MAGIA:
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
      name: 'dicomjson',
      displayName: 'DICOM JSON',
      configurable: true,
      config: {
        name: 'json',
      },
    },
  ],
  defaultDataSourceName: 'dicomjson',
};
