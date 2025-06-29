type User = {
  id: number;
  name: string;
  displayName: string;
  hasVerifiedBadge: boolean;
};

export async function includeAvatarUrlInEntries(
  entries: {
    name: string;
  }[]
) {
  async function getUsernames(userIds: string[]) {
    try {
      const resp = await fetch(`https://users.roblox.com/v1/users`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({
          userIds: userIds.map((id: string) => parseInt(id)),
          excludeBannedUsers: false,
        }),
      });
      const json = await resp.json();
      const usernames: { [key: string]: User } = {};
      if (json.data) {
        json.data.map((user: User) => {
          usernames[user.id] = user;
        });
      }
      return usernames;
    } catch (e) {
      console.warn(e);
      return {};
    }
  }

  const entryUserIds = entries.map((entry: { name: string }) => entry.name);

  const resp = await fetch(
    `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${entryUserIds.join(
      ","
    )}&size=420x420&format=Png&isCircular=false`
  );

  const usernames = await getUsernames(entryUserIds);

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
    console.log(usernames);
    return {
      ...entry,
      avatarUrl,
      username: usernames[entry?.name]?.name ?? undefined,
    };
  });
}
