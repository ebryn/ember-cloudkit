/* globals CloudKit */
export function getDefaultContainer() {
  return CloudKit.getDefaultContainer();
}

export function publicDatabase() {
  return getDefaultContainer().publicCloudDatabase;
}
