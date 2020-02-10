/**
 * @flow
 * @relayHash a1d19f610dd726d580ab4fff75828394
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type getCitiesQueryVariables = {||};
export type getCitiesQueryResponse = {|
  +cities: $ReadOnlyArray<{|
    +name: string,
    +slug: string,
    +country: {|
      +name: string,
      +isoCode: ?string,
    |},
  |}>
|};
export type getCitiesQuery = {|
  variables: getCitiesQueryVariables,
  response: getCitiesQueryResponse,
|};
*/


/*
query getCitiesQuery {
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
    "name": "getCitiesQuery",
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
    "name": "getCitiesQuery",
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
    "name": "getCitiesQuery",
    "id": null,
    "text": "query getCitiesQuery {\n  cities {\n    name\n    slug\n    country {\n      name\n      isoCode\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1491f9614632d868e219d059b5e80505';
module.exports = node;
