const sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl', 'xxxl'] as const;
export type Size = (typeof sizes)[number];
