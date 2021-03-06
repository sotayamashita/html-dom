import React from 'react';

import Markdown from '../../components/Markdown';
import RelatedPosts from '../../components/RelatedPosts';

export default () => {
    return (
<>
<Markdown
    content={`
## 1. Use the remove method

Note that the [\`remove\`](https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove) method isn't supported in Internet Explorer.

~~~ javascript
ele.remove();
~~~

## 2. Use the removeChild method

~~~ javascript
if (ele.parentNode) {
    ele.parentNode.removeChild(ele);
}
~~~
`}
/>
<RelatedPosts
    slugs={[
        'calculate-the-size-of-scrollbar',
        'copy-text-to-the-clipboard',
        'download-a-file',
        'measure-the-width-of-given-text-of-given-font',
        'remove-all-children-of-a-node',
        'sort-a-table-by-clicking-its-headers',
    ]}
/>
</>
    );
};
