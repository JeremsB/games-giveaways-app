import axios from "axios";
import { Giveaway } from "../types/giveaway.type";

export async function listGiveaways(): Promise<Giveaway[]> {
  const { data } = await axios.get("https://www.gamerpower.com/api/giveaways");
  return data;
}
