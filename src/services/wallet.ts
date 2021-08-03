import { getWeb3, getAccount } from "@/api/web3";

export async function connect() {
  return await getWeb3();
}

export async function account() {
  return await getAccount();
}
