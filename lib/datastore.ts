export async function opencloud_ordered_datastore_get(datatstore_name: string) {
  console.log("datastore fetched");
  const v1 = `v1/universes/1180269832/orderedDataStores/${datatstore_name}/scopes/global/entries`;
  const paramters = `max_page_size=100&order_by=desc`;
  const url = `https://apis.roblox.com/ordered-data-stores/${v1}?${paramters}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": process.env.RBLX_AO_API_KEY!,
      },
    });

    if (res.status == 200) {
      const body = await res.json();
      const entries = body.entries;
      return entries;
    }
    return [];
  } catch (e) {
    console.log(e, "ordered error");
  }
}
