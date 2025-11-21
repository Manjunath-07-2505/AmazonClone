const asset = (file) =>
  `${process.env.PUBLIC_URL || ''}/assets/${encodeURIComponent(file)}`;

export const heroContent = {
  headline: 'Everything you need, delivered fast.',
  subcopy:
    'Shop the latest electronics, home essentials, and exclusive Amazon-branded favorites with Prime-speed delivery.',
  ctaPrimary: 'Shop deals',
  ctaSecondary: 'Prime essentials',
  background: asset('61Yx5-N155L._SX3000_.jpg'),
};

export const categories = [
  {
    id: 'smart-home',
    title: 'Smart Home',
    tagline: 'Connected devices & hubs',
    image: asset('61MHjUD24OL._AC_SY200_.jpg'),
  },
  {
    id: 'beauty',
    title: 'Beauty Finds',
    tagline: 'Trending now',
    image: asset('71+hX4mXEIL._AC_SY200_.jpg'),
  },
  {
    id: 'kitchen',
    title: 'Kitchen Upgrade',
    tagline: 'Save on appliances',
    image: asset('61nHUVwR65L._AC_SY200_.jpg'),
  },
  {
    id: 'gaming',
    title: 'Gaming Zone',
    tagline: 'Consoles & accessories',
    image: asset('71bkufoO8QL._AC_SY200_.jpg'),
  },
];

export const flashDeals = [
  {
    id: 'echo-pop',
    title: 'Echo Pop Smart Speaker',
    price: 17.99,
    rating: 4.7,
    image: asset('61MqSic7o9L._AC_SY200_.jpg'),
  },
  {
    id: 'kindle-scribe',
    title: 'Kindle Scribe Essentials',
    price: 289.99,
    rating: 4.4,
    image: asset('61sS-XIvEXL._AC_SY200_.jpg'),
  },
  {
    id: 'ring-doorbell',
    title: 'Ring Video Doorbell',
    price: 49.99,
    rating: 4.6,
    image: asset('71b8fh-dQ4L._AC_SY200_.jpg'),
  },
  {
    id: 'fire-tv',
    title: 'Fire TV 55" 4-Series',
    price: 369.99,
    rating: 4.5,
    image: asset('71+01-0BoPL._AC_SY200_.jpg'),
  },
];

export const featuredShelves = [
  {
    id: 'home-favorites',
    title: 'Home favorites inspired by your browsing',
    items: [
      'Prime-ready furniture picks',
      'Soft textiles & decor upgrades',
      'Kitchen tools that deliver',
      'Storage to declutter quickly',
    ],
    image: asset('61WRa+4i2FL._AC_SY200_.jpg'),
  },
  {
    id: 'fashion',
    title: 'Style deals handpicked for you',
    items: [
      'Everyday athleisure sets',
      'Outerwear under $60',
      'Sneakers from top brands',
      'Accessories to finish the look',
    ],
    image: asset('61ZIF4VgDeL._AC_SY200_.jpg'),
  },
];

export const essentialsStrip = [
  {
    id: 'fresh',
    label: 'Amazon Fresh',
    description: 'Grocery staples delivered today',
  },
  {
    id: 'pharmacy',
    label: 'Amazon Pharmacy',
    description: 'Prescriptions, simplified',
  },
  {
    id: 'prime',
    label: 'Prime',
    description: 'Free delivery & streaming perks',
  },
  {
    id: 'business',
    label: 'Business',
    description: 'Work supplies & bulk savings',
  },
];

