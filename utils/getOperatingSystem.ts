export const getOperatingSystem = (window) => {
  const appVersion = window?.navigator?.appVersion;

  if (appVersion.indexOf("Win") !== -1) {
    return "Windows";
  }
  if (appVersion.indexOf("Mac") !== -1) {
    return "Mac";
  }
  if (appVersion.indexOf("X11") !== -1) {
    return "UNIX";
  }
  if (appVersion.indexOf("Linux") !== -1) {
    return "Linux";
  }

  return "Unknown";
};
