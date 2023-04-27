const garmentTypes = [
  'jackets',
  'dresses',
  'tops',
  'shorts',
  'socks',
  'shoes',
] as const;

export type GarmentType = (typeof garmentTypes)[number];
