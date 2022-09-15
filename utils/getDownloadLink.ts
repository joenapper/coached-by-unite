import { appStore, playStore } from "../config";

export const getDownloadLink = (os) => {
  const downloadLink = os === "Mac" ? appStore : playStore;

  return downloadLink;
};
