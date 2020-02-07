import { Environment, Network, RecordSource, Store } from 'relay-runtime';

async function fetchQuery(operation, variables) {
  const response = await fetch('https://api.graphql.jobs/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  });

  return await response.json();
}

const source = new RecordSource();
const store = new Store(source);
const network = Network.create(fetchQuery);
const handlerProvider = null;

const environment = new Environment({
  handlerProvider,
  network,
  store
});

export default environment;
