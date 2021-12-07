var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { type: 'equals', key: 'networkKey', value: '3aee7756-565e-4dc5-b22c-f997fbd7105c' },
  occurrenceSearchTabs: ['MAP', 'TABLE', 'GALLERY', 'DATASETS'], // define which tabs to show and in which order
  excludedFilters: ['continent', 'basisOfRecord', 'depth', 'establishmentMeans', 'eventId', 'hostingOrganizationKey', 'identifiedById', 'occurrenceStatus', 'organismId', 'organismQuantity', 'protocol', 'publishingCountryCode', 'recordedById', 'relativeOrganismQuantity', 'sampleSizeUnit', 'sampleSizeValue', 'samplingProtocol', 'dwcaExtension'],
  highlightedFilters: ['q', 'taxonKey', 'typeStatus', 'recordNumber', 'recordedBy', 'locality', 'country',  'year'],
  defaultTableColumns: ['features', 'country', 'coordinates', 'year', 'recordedBy', 'catalogNumber', 'dataset', 'publisher']
  // defaultTableColumns: ['features', 'country', 'coordinates', 'year', 'basisOfRecord', 'dataset', 'publisher', 'catalogNumber', 'recordedBy', 'identifiedBy']
};
