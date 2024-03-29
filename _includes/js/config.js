var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  version: 2,
  routes: {
    enabledRoutes: ['occurrenceSearch', 'datasetKey', 'datasetSearch'],
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      route: '/data'
    },
  },
  occurrence: {
    rootPredicate: { type: 'equals', key: 'networkKey', value: '3aee7756-565e-4dc5-b22c-f997fbd7105c' },
    occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'], // define which tabs to show and in which order
    excludedFilters: ['continent', 'basisOfRecord', 'depth', 'establishmentMeans', 'eventId', 'hostingOrganizationKey', 'identifiedById', 'occurrenceStatus', 'organismId', 'organismQuantity', 'protocol', 'publishingCountryCode', 'recordedById', 'relativeOrganismQuantity', 'sampleSizeUnit', 'sampleSizeValue', 'samplingProtocol', 'dwcaExtension'],
    highlightedFilters: ['q', 'taxonKey', 'typeStatus', 'recordedBy', 'recordNumber', 'locality', 'country', 'year'],
    availableTableColumns: ['recordedBy', 'institutionCode', 'collectionCode', 'country', 'locality', 'features', 'catalogNumber']
    // availableTableColumns: ['features', 'typeStatus', 'country', 'coordinates', 'year', 'basisOfRecord', 'dataset', 'publisher', 'catalogNumber', 'recordedBy', 'recordNumber', 'identifiedBy', collectionCode, institutionCode, locality]
  },
  dataset: {
    rootFilter: {
      'networkKey': '3aee7756-565e-4dc5-b22c-f997fbd7105c'
    }
  },
  availableCatalogues: ['OCCURRENCE', 'DATASET'],
};
