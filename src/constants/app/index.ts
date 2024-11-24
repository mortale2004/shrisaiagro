import { RoutePermittedRole } from '@/types/app';

export const initialURL = '/';
export const loginURL = '/login';

export const PAGE = 0;
export const PAGE_SIZE = 50;

export const GENDER = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
};

export const COLOR = {
  RED: 'RED',
  GREEN: 'GREEN',
  YELLOW: 'YELLOW',
};

export const GENDERS = [
  {
    _id: GENDER.MALE,
    gender_name: 'Male',
  },
  {
    _id: GENDER.FEMALE,
    gender_name: 'Female',
  },
  {
    _id: GENDER.OTHER,
    gender_name: 'Other',
  },
];

export const COLORS = [
  {
    _id: COLOR.RED,
    color_name: 'Red',
  },
  {
    _id: COLOR.GREEN,
    color_name: 'Green',
  },

  {
    _id: COLOR.YELLOW,
    color_name: 'Yellow',
  },
];

export const USER_ROLE: { [key: string]: RoutePermittedRole } = {
  USER: 'USER',
  SUPER_ADMIN: 'SUPER_ADMIN',
  PUBLIC: 'PUBLIC',
  ADMIN: 'ADMIN',
  BOOTH_HEAD: 'BOOTH_HEAD',
};

export const familyFilters = {
  Heads: 'is_family_head',
  Members: 'is_family_member',
  Pending: 'pending',
  All: 'all',
};

export const CHANNEL = [
  {
    _id: 'Trans',
    name: 'Transactional',
  },
  {
    _id: 'Promo',
    name: 'Promitional',
  },
];

export const COMMUNICATE_TO = {
  TALUKA: 'TALUKA',
  VILLAGE: 'VILLAGE',
  'POLLING STATION': 'POLLING STATION',
};

export const COMMUNICATION_TYPE = {
  SMS: 'SMS',
  'VOICE CALL': 'VOICE CALL',
};

export const CASTE_SUMMARY_BY = {
  DISTRICT: 'DISTRICT',
  TALUKA: 'TALUKA',
  GAT: 'GAT',
  GAN: 'GAN',
  VILLAGE: 'VILLAGE',
  'POLLING STATION': 'POLLING STATION',
};

export const CASTE_GROUP_BY = {
  CASTE: 'CASTE',
  CATEGORY: 'CATEGORY',
};

export const CUSTOM_TEXT = 'custom_text';

export const VARIABLE_OPTIONS = {
  full_name_marathi: 'Full Name Marathi',
  full_name: 'Full Name',
  serial_number_v_24: 'Serial Number',
  polling_station_number: 'Polling Station Number',
  [CUSTOM_TEXT]: 'Custom Text',
};

export const SMS_TEMPLATE_REGEX = /{#(.*?)#}/g;
