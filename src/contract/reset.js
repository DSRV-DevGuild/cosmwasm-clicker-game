import { calculateFee, GasPrice } from "@cosmjs/stargate";
import contractAddress from "./address";

const reset = async (client, address, score, chainId, denom) => {
  const gasPrice = GasPrice.fromString("0.025" + denom);
  const executeFee = calculateFee(300_000, gasPrice);
  const result = await client.execute(
    address,
    contractAddress[chainId],
    { reset: { count: score } },
    executeFee
  );
  return result;
};

export default reset;
