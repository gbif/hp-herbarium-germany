var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { type: 'equals', key: 'networkKey', value: '3aee7756-565e-4dc5-b22c-f997fbd7105c' },
  occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'], // define which tabs to show and in which order
  excludedFilters: ['continent', 'basisOfRecord', 'depth', 'establishmentMeans', 'eventId', 'hostingOrganizationKey', 'identifiedById', 'occurrenceStatus', 'organismId', 'organismQuantity', 'protocol', 'publishingCountryCode', 'recordedById', 'relativeOrganismQuantity', 'sampleSizeUnit', 'sampleSizeValue', 'samplingProtocol', 'dwcaExtension'],
  highlightedFilters: ['q', 'taxonKey', 'typeStatus', 'recordedBy', 'recordNumber', 'locality', 'country',  'year'],
  defaultTableColumns: ['recordedBy', 'recordNumber', 'features', 'country', 'year', 'recordedBy', 'dataset', 'publisher', 'catalogNumber']
  // defaultTableColumns: ['features', 'typeStatus', 'country', 'coordinates', 'year', 'basisOfRecord', 'dataset', 'publisher', 'catalogNumber', 'recordedBy', 'recordNumber', 'identifiedBy']
};
