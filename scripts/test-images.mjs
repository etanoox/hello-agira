import assert from 'node:assert/strict';
import photos from '../src/data/photos.json' with { type: 'json' };
import { imageMetadata, imageRights, resolveImageMetadata } from '../src/lib/image-metadata.ts';
import { imageObject, imageReference, serializeSchema } from '../src/lib/schema.ts';

const origin = new URL('https://helloagira.it');
const key = 'cassatelleAnello9934';
const original = structuredClone(photos[key]);
const originalRights = imageRights.images[key];
let scenarios = 0;
function check(fn) {
  delete imageRights.images[key];
  try { fn(); scenarios++; }
  finally {
    for (const field of Object.keys(photos[key])) delete photos[key][field];
    Object.assign(photos[key], structuredClone(original));
    if (originalRights === undefined) delete imageRights.images[key];
    else imageRights.images[key] = originalRights;
  }
}
// Authorship, source URLs and a copyright-looking credit do not prove ownership.
check(() => {
  Object.assign(photos[key], { credit: { it: '© Credit only', en: '© Credit only' }, authorUrl: 'https://example.org/author', source: 'https://example.org/source' });
  const image = imageObject(origin, 'it', key);
  assert.deepEqual(image.creator, { '@type': 'Person', name: 'Filippo Anello' });
  assert.ok(!('copyrightNotice' in image));
  assert.ok(!('acquireLicensePage' in image));
});
check(() => {
  Object.assign(photos[key], { copyrightHolder: '  Test archive  ', licenseContactUrl: ' https://example.org/permissions ' });
  const image = imageObject(origin, 'en', key);
  assert.equal(image.copyrightNotice, '© Test archive');
  assert.equal(image.acquireLicensePage, 'https://example.org/permissions');
  assert.equal(image.creator.name, 'Filippo Anello');
});
// Contact roles are selected per image, even when the person's URL is shared.
check(() => {
  const people = { test: { name: 'Test archive', type: 'Organization', licenseContactUrl: 'https://example.org/permissions' } };
  const withoutContact = resolveImageMetadata(original, { creatorId: 'test', copyrightHolderId: 'test' }, people);
  assert.equal(withoutContact.copyrightHolder, 'Test archive');
  assert.equal(withoutContact.licenseContactUrl, undefined);
  const withContact = resolveImageMetadata(original, { licenseContactId: 'test' }, people);
  assert.equal(withContact.licenseContactUrl, people.test.licenseContactUrl);
  assert.equal(withContact.copyrightHolder, undefined);
});
check(() => {
  Object.assign(photos[key], { author: null, credit: { it: '  ', en: '' }, copyrightHolder: ' ', licenseContactUrl: null });
  const image = imageObject(origin, 'it', key);
  for (const field of ['creator', 'creditText', 'copyrightNotice', 'acquireLicensePage']) assert.ok(!(field in image));
  assert.equal(image.license, 'https://helloagira.it/it/note-legali/#diritti-immagini');
});
check(() => {
  photos[key].licenseUrl = 'https://example.org/image-terms';
  for (const lang of ['it', 'en']) assert.equal(imageObject(origin, lang, key).license, photos[key].licenseUrl);
});
check(() => {
  photos[key].copyrightHolder = 'Test owner';
  const it = imageObject(origin, 'it', key), en = imageObject(origin, 'en', key);
  assert.equal(it['@id'], en['@id']);
  assert.equal(it.copyrightNotice, en.copyrightNotice);
  assert.notEqual(it.caption, en.caption);
  assert.notEqual(it.creditText, en.creditText);
  assert.equal(en.license, 'https://helloagira.it/en/legal-notice/#image-rights');
});
check(() => {
  for (const field of ['licenseUrl', 'licenseContactUrl']) {
    for (const value of ['/relative', 'mailto:test@example.org', 'javascript:alert(1)', 'https://user:secret@example.org/']) {
      photos[key][field] = value;
      assert.throws(() => imageObject(origin, 'it', key));
    }
    delete photos[key][field];
  }
});
check(() => {
  imageRights.images[key] = { creatorId: 'pro-loco-agira' };
  assert.deepEqual(imageObject(origin, 'it', key).creator, { '@type': 'Organization', name: 'Pro Loco Agira' });
  imageRights.images[key] = { creatorId: null, creditIsAttribution: false };
  assert.equal(imageObject(origin, 'it', key).creator, undefined);
  assert.equal(imageObject(origin, 'it', key).creditText, undefined);
  assert.throws(() => resolveImageMetadata(original, { copyrightHolderId: 'missing' }));
});
check(() => {
  const small = imageObject(origin, 'it', key, 800), large = imageObject(origin, 'it', key);
  assert.equal(small['@id'], large['@id']);
  assert.notEqual(small.contentUrl, large.contentUrl);
  assert.equal(imageReference(origin, key)['@id'], large['@id']);
  const poster = imageObject(origin, 'it', 'cassatellaFestival2022');
  assert.equal(poster.width, 480);
  assert.equal(poster.height, 674);
  assert.equal(poster.contentUrl, 'https://helloagira.it/images/cassatella-festival-2022.webp');
});
check(() => {
  photos[key].alt.it = '</script><script>alert(1)</script>';
  const json = serializeSchema(imageObject(origin, 'it', key));
  assert.ok(!json.includes('<'));
  assert.equal(JSON.parse(json).caption, photos[key].alt.it);
});
for (const [id, person] of Object.entries(imageRights.people)) {
  assert.ok(person.name.trim(), id);
  assert.ok(['Person', 'Organization'].includes(person.type), id);
  if (person.licenseContactUrl) {
    const url = new URL(person.licenseContactUrl);
    assert.ok(['http:', 'https:'].includes(url.protocol) && !url.username && !url.password, id);
  }
}
for (const image of Object.keys(imageRights.images)) {
  assert.ok(Object.hasOwn(photos, image), `Unknown image in rights registry: ${image}`);
  imageMetadata(image);
}
console.log(`PASS: ${scenarios} image metadata scenarios and shared rights registry.`);
