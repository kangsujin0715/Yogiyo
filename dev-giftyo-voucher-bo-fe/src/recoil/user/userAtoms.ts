import { atom } from 'recoil';
import { UserVO } from 'src/interface/user/UserVO';
import { UserAtomKeys } from 'src/recoil/user/userAtomKeys';

export const userInfoAtom = atom<UserVO | null>({
  key: UserAtomKeys.USER_INFO,
  default: undefined,
});
