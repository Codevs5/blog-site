export const biosToArray = (bios) => Object.keys(bios).map(key => parseBio(bios[key].metadata));
const parseBio = (bio) => ({
  ...bio,
  bio: bio.bio || 'Joder, pues no tengo bio'
});

export const parseEntriesInfo = (entries) => Object.keys(entries).map((key) => parseEntryInfo(entries[key], key));
const parseEntryInfo = (entry, key) => ({
  ...entry,
  id: key
});
