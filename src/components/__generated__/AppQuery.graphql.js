/**
 * @flow
 * @relayHash 76848345ec9c017721d6e24b1cbf5dad
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +cities: $ReadOnlyArray<{|
    +name: string,
    +slug: string,
    +country: {|
      +name: string,
      +isoCode: ?string,
    |},
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
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
    "name": "AppQuery",
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
    "name": "AppQuery",
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
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  cities {\n    name\n    slug\n    country {\n      name\n      isoCode\n      id\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e3d0ff765a63d7ba9bf9fadb8a8844f3';
module.exports = node;
