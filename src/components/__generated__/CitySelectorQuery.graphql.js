/**
 * @flow
 * @relayHash 24938b7b023e760737e2521444579c60
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CitySelectorQueryVariables = {||};
export type CitySelectorQueryResponse = {|
  +cities: $ReadOnlyArray<{|
    +name: string,
    +slug: string,
    +country: {|
      +name: string,
      +isoCode: ?string,
    |},
  |}>
|};
export type CitySelectorQuery = {|
  variables: CitySelectorQueryVariables,
  response: CitySelectorQueryResponse,
|};
*/


/*
query CitySelectorQuery {
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
    "name": "CitySelectorQuery",
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
    "name": "CitySelectorQuery",
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
    "name": "CitySelectorQuery",
    "id": null,
    "text": "query CitySelectorQuery {\n  cities {\n    name\n    slug\n    country {\n      name\n      isoCode\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9613def198a57f3887c99a1ce4e4432a';
module.exports = node;
