export const customerKeys = {
  all: ['customer'] as const,
  brandList: () => [...customerKeys.all, 'brandList'] as const,
  brandDetail: () => [...customerKeys.all, 'brandDetail'] as const,
};
