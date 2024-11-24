import { PAGE, PAGE_SIZE } from '@/constants/app';
import { atom } from 'recoil';

export const countAtom = atom({
  key: 'countAtom',
  default: 0,
});

export const pageAtom = atom({
  key: 'pageAtom',
  default: PAGE,
});

export const rowsPerPageAtom = atom({
  key: 'rowsPerPageAtom',
  default: PAGE_SIZE,
});

export const selectedForEditAtom = atom({
  key: 'selectedForEditAtom',
  default: null,
});

export const itemsToDelete = atom({
  key: 'itemsToDelete',
  default: [],
});
