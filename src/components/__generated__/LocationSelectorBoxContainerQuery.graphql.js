/**
 * @flow
 * @relayHash 3f0da76679dd669bf7cee9d39bd30168
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LocationSelectorBoxContainerQueryVariables = {||};
export type LocationSelectorBoxContainerQueryResponse = {|
  +cities: $ReadOnlyArray<{|
    +name: string,
    +slug: string,
    +country: {|
      +name: string,
      +isoCode: ?string,
    |},
  |}>
|};
export type LocationSelectorBoxContainerQuery = {|
  variables: LocationSelectorBoxContainerQueryVariables,
  response: LocationSelectorBoxContainerQueryResponse,
|};
*/


/*
query LocationSelectorBoxContainerQuery {
  cities {
    name
    slug
    country {
      name
      isoCode
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isoCode",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LocationSelectorBoxContainerQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cities",
        "storageKey": null,
        "args": null,
        "concreteType": "City",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "country",
            "storageKey": null,
            "args": null,
            "concreteType": "Country",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LocationSelectorBoxContainerQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "cities",
        "storageKey": null,
        "args": null,
        "concreteType": "City",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "country",
            "storageKey": null,
            "args": null,
            "concreteType": "Country",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/)
            ]
          },
          (v3/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LocationSelectorBoxContainerQuery",
    "id": null,
    "text": "query LocationSelectorBoxContainerQuery {\n  cities {\n    name\n    slug\n    country {\n      name\n      isoCode\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e06f566e0426ebd3009d773a97598ab8';
module.exports = node;
