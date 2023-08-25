export function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32-bit integer
  }
  return hash.toString();
}

export const users = [
  {
    id: "1",
    name: "J Smith",
    email: "jsmith@example.com",
    phone: "+923335554656",
    passwordHash: simpleHash("jsmithPassword"),
  },
  {
    id: "2",
    name: "Syed Sakhawat",
    email: "sakhawatsyed4@gmail.com",
    phone: "+922345678912",
    passwordHash: simpleHash("abc123"),
  },
];
