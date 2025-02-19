import { IdParams } from './types';

type EditPagesParams = Omit<IdParams, 'postId'>;

export const ROUTES = {
  HOME: {
    ROOT: '/',
    DETAIL: (agentId: IdParams['agentId']) => `/${agentId}`,
  },
  JOIN: '/join',
  CREATE: {
    ROOT: '/create',
    DETAIL: (agentId: IdParams['agentId']) => `/create/${agentId}`,
  },
  EDIT: {
    ROOT: ({ agentId, postGroupId }: EditPagesParams) =>
      `/edit/${agentId}/${postGroupId}`,
    DETAIL: ({
      agentId,
      postGroupId,
      postId,
    }: IdParams & Pick<Required<IdParams>, 'postId'>) =>
      `/edit/${agentId}/${postGroupId}/detail?postId=${postId}`,
    SCHEDULE: ({ agentId, postGroupId }: EditPagesParams) =>
      `/edit/${agentId}/${postGroupId}/schedule`,
  },
  PERSONALIZE: (agentId: IdParams['agentId']) => `/personalize/${agentId}`,
  SCHEDULE: {
    ROOT: (agentId: IdParams['agentId']) => `/schedule/${agentId}`,
    DETAIL: ({ agentId, postGroupId, postId }: IdParams) =>
      `/schedule/${agentId}/${postGroupId}/${postId}`,
  },
  ERROR: '/error',
  GOOGLE: {
    CALLBACK: '/api/auth/google/callback',
  },
} as const;
