export async function includeAvatarUrlInEntries(
  entries: {
    name: string;
  }[]
) {
  const resp = await fetch(
    `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${entries
      .map((entry: { name: string }) => entry.name)
      .join(",")}&size=420x420&format=Png&isCircular=false`
  );

  const json = await resp.json();
  const data = json?.data;
  return entries.map((entry: { name: string }) => {
    const avatarEntry = data.find(
      (avatarEntry: { targetId: number; imageUrl: string }) =>
        avatarEntry.targetId == parseInt(entry.name)
    );
    let avatarUrl;
    if (avatarEntry && avatarEntry.state === "Completed") {
      avatarUrl = avatarEntry.imageUrl;
    }
    return {
      ...entry,
      avatarUrl,
    };
  });
}
