import Immutable from 'immutable';

import TextDisplay from './components/TextDisplay';
import HTMLDisplay from './components/HTMLDisplay';

import {
  PNGDisplay,
  JPEGDisplay,
  GIFDisplay,
} from './components/ImageDisplay';

export const transforms = new Immutable.Map({
  'text/plain': TextDisplay,
  'image/png': PNGDisplay,
  'image/jpeg': JPEGDisplay,
  'image/gif': GIFDisplay,
  'text/html': HTMLDisplay,
});

export const displayOrder = new Immutable.List([
  'application/javascript',
  'text/html',
  'text/markdown',
  'text/latex',
  'image/svg+xml',
  'image/gif',
  'image/png',
  'image/jpeg',
  'application/pdf',
  'text/plain',
]);

/**
 * Choose the richest mimetype available based on the displayOrder and transforms
 * @param  {Immutable.Map}   bundle - Map({mimetype1: data1, mimetype2: data2, ...})
 * @param  {Immutable.List}  ordered list of mimetypes - List(['text/html', 'text/plain'])
 * @param  {Immutable.Map}   mimetype -> React Component - Map({'text/plain': TextTransform})
 * @return {string}          Richest mimetype
 */
export function richestMimetype(bundle, order = displayOrder, tf = transforms) {
  return bundle.keySeq()
                // we can only use those we have a transform for
                .filter((mimetype) => tf.has(mimetype) && order.includes(mimetype))
                // the richest is based on the order in displayOrder
                .sortBy((mimetype) => order.indexOf(mimetype))
                .first();
}
