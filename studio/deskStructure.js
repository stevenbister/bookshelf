import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings'),
        ),
      ...S.documentTypeListItems().filter(
        // remove our site settings document type from our main list
        (listItem) => !['siteSettings'].includes(listItem.getId()),
      ),
    ]);
