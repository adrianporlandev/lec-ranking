// src/importImages.js
export const getRoleImage = (role) => {
  return `https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868748/lol-project/pos/${role}.png`;
};

export const getTierImage = (tier) => {
  return `https://res.cloudinary.com/dlfgycfb8/image/upload/v1724868748/lol-project/elo/Rank%3D${tier}.png`;
};