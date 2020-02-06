/**
 * @flow
 * @relayHash a17a92a902d7a5245cc4f4dce98b0325
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +jobs: $ReadOnlyArray<{|
    +id: string,
    +title: string,
    +cities: ?$ReadOnlyArray<{|
      +name: string,
      +country: {|
        +name: string,
        +isoCode: ?string,
      |},
    |}>,
    +tags: ?$ReadOnlyArray<{|
      +name: string
    |}>,
    +applyUrl: ?string,
    +company: ?{|
      +name: string,
      +websiteUrl: string,
      +logoUrl: ?string,
    |},
    +updatedAt: any,
    +postedAt: any,
  |}>
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  jobs {
    id
    title
    cities(where: {name: "Berlin"}) {
      name
      country {
        name
        isoCode
        id
      }
      id
    }
    tags {
      name
      id
    }
    applyUrl
    company {
      name
      websiteUrl
      logoUrl
      id
    }
    updatedAt
    postedAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "Literal",
    "name": "where",
    "value": {
      "name": "Berlin"
    }
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isoCode",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "applyUrl",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "websiteUrl",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logoUrl",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "updatedAt",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "postedAt",
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
        "name": "jobs",
        "storageKey": null,
        "args": null,
        "concreteType": "Job",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cities",
            "storageKey": "cities(where:{\"name\":\"Berlin\"})",
            "args": (v2/*: any*/),
            "concreteType": "City",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "country",
                "storageKey": null,
                "args": null,
                "concreteType": "Country",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/)
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tags",
            "storageKey": null,
            "args": null,
            "concreteType": "Tag",
            "plural": true,
            "selections": [
              (v3/*: any*/)
            ]
          },
          (v5/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "company",
            "storageKey": null,
            "args": null,
            "concreteType": "Company",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/)
            ]
          },
          (v8/*: any*/),
          (v9/*: any*/)
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
        "name": "jobs",
        "storageKey": null,
        "args": null,
        "concreteType": "Job",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "cities",
            "storageKey": "cities(where:{\"name\":\"Berlin\"})",
            "args": (v2/*: any*/),
            "concreteType": "City",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "country",
                "storageKey": null,
                "args": null,
                "concreteType": "Country",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v0/*: any*/)
                ]
              },
              (v0/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "tags",
            "storageKey": null,
            "args": null,
            "concreteType": "Tag",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v0/*: any*/)
            ]
          },
          (v5/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "company",
            "storageKey": null,
            "args": null,
            "concreteType": "Company",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v0/*: any*/)
            ]
          },
          (v8/*: any*/),
          (v9/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "AppQuery",
    "id": null,
    "text": "query AppQuery {\n  jobs {\n    id\n    title\n    cities(where: {name: \"Berlin\"}) {\n      name\n      country {\n        name\n        isoCode\n        id\n      }\n      id\n    }\n    tags {\n      name\n      id\n    }\n    applyUrl\n    company {\n      name\n      websiteUrl\n      logoUrl\n      id\n    }\n    updatedAt\n    postedAt\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dd56555fca5287adfb80641d09d86689';
module.exports = node;
