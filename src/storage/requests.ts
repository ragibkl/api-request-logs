const REQUESTS: any[] = [];

export async function add(evt: any) {
  REQUESTS.push(evt);
}

export async function list() {
  return REQUESTS;
}

export async function clear() {
  REQUESTS.length = 0;
}
