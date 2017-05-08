# transformime-react

This package has been deprecated in favor of [`@nteract/transforms`](https://github.com/nteract/nteract/tree/master/packages/transforms).

The usage is similar:

```js
import { richestMimetype, standardTransforms } from '@nteract/transforms';
import Immutable from 'immutable';

// Jupyter style MIME bundle
const bundle = new Immutable.Map({
  'text/plain': 'This is great',
  'image/png': 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
});

// Find out which mimetype is the richest
const mimetype = richestMimetype(bundle); 

// Get the matching React.Component for that mimetype
let Transform = transforms.get(mimetype);

if(Transform) {
  return <Transform data={bundle.get(mimetype)} />;
}
```
