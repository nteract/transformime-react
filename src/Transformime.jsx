import React from 'react';
import Immutable from 'immutable';

import TextTransform from './TextTransform';
import ImageTransform from './ImageTransform';

export default class Transformime {
  constructor() {

    this.transforms = new Immutable.Map({
      'text/plain': TextTransform,
      'image/png': ImageTransform,
      'image/jpeg': ImageTransform,
      'image/svg+xml': ImageTransform,
    });

    this.displayOrder = new Immutable.List([
      'application/javascript',
      'text/html',
      'text/markdown',
      'text/latex',
      'image/svg+xml',
      'image/png',
      'image/jpeg',
      'application/pdf',
      'text/plain',
    ]);
  }

  /**
   * Transforms a mime bundle, using the richest available representation,
   * into React Component.
   * @param  {Immutable.Map}   bundle - Map({mimetype1: data1, mimetype2: data2, ...})
   * @return {React.Component} Richest mimetype as a React Component
   */
  transform(bundle) {
    const richestMimetype = bundle.keySeq()
                                  .sortBy((mimetype) => this.displayOrder.indexOf(mimetype))
                                  .first();

    const t = React.createFactory(this.transforms.get(richestMimetype));
    return t({ data: bundle.get(richestMimetype), mimetype: richestMimetype });
  }
}
