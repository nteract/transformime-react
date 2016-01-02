import React from 'react';

import TextTransform from './TextTransform';
import ImageTransform from './ImageTransform';
import Immutable from 'immutable';

export class Transformime {
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

    const Transform = this.transforms.get(richestMimetype);
    return <Transform data={bundle.get(richestMimetype)}
                      mimetype={richestMimetype} />;
  }
}
