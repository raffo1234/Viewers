// @ts-expect-error - No types for this file
window.config = {
  routerBasename: '/',
  extensions: [],
  modes: [],
  showStudyList: true,
  // Esta es la clave para que lea tu API de Next.js
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
      sourceName: 'dicomjson',
      configuration: {
        friendlyName: 'CADIA API',
        name: 'json',
      },
    },
  ],
  defaultDataSourceName: 'dicomjson',
  // --- FIX PARA ERRORES DE WINDOWS/WEBGPU/ONNX ---
  disableBrowserSupportCheck: true,
  omitQuailityControl: true,
  // Desactivamos segmentación avanzada para evitar el error de __filename
  activeSegmentation: false,
  showWarningMessageForBrowser: false,
  showNavigation: true,
  showDownload: true,
  // Configuraciones de renderizado
  maxNumberOfWebWorkers: 4,
  acceptHeader: ['application/dicom+json', 'application/octet-stream'],
};
