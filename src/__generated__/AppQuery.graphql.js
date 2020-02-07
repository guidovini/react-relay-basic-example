/**
 * @flow
 * @relayHash 646dd5846ae83a15479d91c03080b7ec
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type JobOrderByInput = "applyUrl_ASC" | "applyUrl_DESC" | "createdAt_ASC" | "createdAt_DESC" | "description_ASC" | "description_DESC" | "id_ASC" | "id_DESC" | "isFeatured_ASC" | "isFeatured_DESC" | "isPublished_ASC" | "isPublished_DESC" | "locationNames_ASC" | "locationNames_DESC" | "postedAt_ASC" | "postedAt_DESC" | "slug_ASC" | "slug_DESC" | "title_ASC" | "title_DESC" | "updatedAt_ASC" | "updatedAt_DESC" | "userEmail_ASC" | "userEmail_DESC" | "%future added value";
export type AppQueryVariables = {|
  city: string,
  first?: ?number,
  after?: ?string,
  orderBy?: ?JobOrderByInput,
|};
export type AppQueryResponse = {|
  +city: {|
    +jobs: ?$ReadOnlyArray<{|
      +id: string,
      +title: string,
      +tags: ?$ReadOnlyArray<{|
        +name: string
      |}>,
      +applyUrl: ?string,
      +company: ?{|
        +name: string,
        +websiteUrl: string,
        +logoUrl: ?string,
      |},
      +cities: ?$ReadOnlyArray<{|
        +name: string,
        +country: {|
          +name: string,
          +isoCode: ?string,
        |},
      |}>,
      +updatedAt: any,
      +postedAt: any,
    |}>
  |}
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $city: String!
  $first: Int
  $after: String
  $orderBy: JobOrderByInput
) {
  city(input: {slug: $city}) {
    jobs(first: $first, after: $after, orderBy: $orderBy) {
      id
      title
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
      cities {
        name
        country {
          name
          isoCode
          id
        }
        id
      }
      updatedAt
      postedAt
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "city",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "first",
    "type": "Int",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "after",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "orderBy",
    "type": "JobOrderByInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "ObjectValue",
    "name": "input",
    "fields": [
      {
        "kind": "Variable",
        "name": "slug",
        "variableName": "city"
      }
    ]
  }
],
v2 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "orderBy",
    "variableName": "orderBy"
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "applyUrl",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "websiteUrl",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "logoUrl",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isoCode",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "updatedAt",
  "args": null,
  "storageKey": null
},
v11 = {
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
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "City",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "jobs",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "Job",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "tags",
                "storageKey": null,
                "args": null,
                "concreteType": "Tag",
                "plural": true,
                "selections": [
                  (v5/*: any*/)
                ]
              },
              (v6/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "company",
                "storageKey": null,
                "args": null,
                "concreteType": "Company",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "cities",
                "storageKey": null,
                "args": null,
                "concreteType": "City",
                "plural": true,
                "selections": [
                  (v5/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "country",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Country",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v9/*: any*/)
                    ]
                  }
                ]
              },
              (v10/*: any*/),
              (v11/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "city",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "City",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "jobs",
            "storageKey": null,
            "args": (v2/*: any*/),
            "concreteType": "Job",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "tags",
                "storageKey": null,
                "args": null,
                "concreteType": "Tag",
                "plural": true,
                "selections": [
                  (v5/*: any*/),
                  (v3/*: any*/)
                ]
              },
              (v6/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "company",
                "storageKey": null,
                "args": null,
                "concreteType": "Company",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v3/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "cities",
                "storageKey": null,
                "args": null,
                "concreteType": "City",
                "plural": true,
                "selections": [
                  (v5/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "country",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Country",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
                      (v9/*: any*/),
                      (v3/*: any*/)
                    ]
                  },
                  (v3/*: any*/)
                ]
              },
              (v10/*: any*/),
              (v11/*: any*/)
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
    "text": "query AppQuery(\n  $city: String!\n  $first: Int\n  $after: String\n  $orderBy: JobOrderByInput\n) {\n  city(input: {slug: $city}) {\n    jobs(first: $first, after: $after, orderBy: $orderBy) {\n      id\n      title\n      tags {\n        name\n        id\n      }\n      applyUrl\n      company {\n        name\n        websiteUrl\n        logoUrl\n        id\n      }\n      cities {\n        name\n        country {\n          name\n          isoCode\n          id\n        }\n        id\n      }\n      updatedAt\n      postedAt\n    }\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba1e2bd94902a7033618a7e21f14c0b3';
module.exports = node;
