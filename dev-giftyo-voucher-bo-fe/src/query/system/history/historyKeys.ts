export const DefaultHistoryQueryKey = ['system', 'history'];
export const HistoryQueryKey = {
  login: [...DefaultHistoryQueryKey, 'login'],
  modify: [...DefaultHistoryQueryKey, 'modify'],
  read: [...DefaultHistoryQueryKey, 'read'],
  upload: [...DefaultHistoryQueryKey, 'upload'],
  download: [...DefaultHistoryQueryKey, 'download'],
  filter: [...DefaultHistoryQueryKey, 'menu-filter'],
};
