import { getWeb3, getAccount } from "@/api/web3";

// eslint-disable-next-line
export async function connect(): Promise<any> {
  return await getWeb3();
}

export async function account(): Promise<string> {
  return await getAccount();
}
