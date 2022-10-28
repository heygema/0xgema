//0xdd941e4C1b6CF6f4f690A0d23736757B048Aa1E2
//
import axios from "axios";

export default function Nft({ nfts }: { nfts: any }) {
  return null;
}

export async function getStaticProps() {
  const address = "0xdd941e4C1b6CF6f4f690A0d23736757B048Aa1E2";

  const apiKey =
    "Jh4J3ByRzAKMXGczUHh2Ax2eJX4aryF6ugjSbjljtfRMdtUlENxaQv4RoYbRrYwn";

  const options = {
    method: "GET",
    url: `https://deep-index.moralis.io/api/v2/${address}/nft`,
    params: { chain: "eth", format: "decimal" },
    headers: { accept: "application/json", "X-API-Key": apiKey },
  };

  // any is a lot of stuff, F any
  let result = await axios.request<{ result: Array<any> }>(options);
  // url https://opensea.io/assets/ethereum/0x479e2cfa68c4a30eb37404044e195858a1d2eddc/1281
  // token_address + token_id "1659"
  //

  const opensea = "https://opensea.io/assets/ethereum";

  const resolveNftData = async (url: string) => {
    try {
      let result = await axios.get(url);

      return {
        name: result.data?.name,
        description: result.data?.description,
        image: result.data?.image,
      };
    } catch {
      return {};
    }
  };

  const nfts = [];

  for (let data of result.data?.result) {
    //let nftData = await resolveNftData(data?.token_uri);

    let nft = {
      ...{},
      metadata: data?.metadata,
      tokenData: data?.token_uri,
      openseaUrl: `${opensea}/${data?.token_address}/${data?.token_id}`,
    };

    nfts.push(nft);
  }

  console.log(nfts);

  return {
    props: {
      nfts,
    },
  };
}
