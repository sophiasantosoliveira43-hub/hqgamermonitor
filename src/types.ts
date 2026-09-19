export interface PortDetail {
  id: string;
  name: string;
  type: 'video' | 'audio' | 'power';
  version: string;
  maxBandwidth: string;
  supportedModes: string[];
  description: string;
  badge: string;
  iconName: string;
}

export interface SpecGroup {
  category: string;
  items: {
    label: string;
    value: string;
    highlight?: boolean;
  }[];
}

export interface ErgonomicFeature {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  spec: string;
}

export interface BundleOption {
  id: string;
  name: string;
  tag?: string;
  price: number;
  originalPrice: number;
  installments: string;
  includes: string[];
}

export interface ReviewItem {
  name: string;
  role: string;
  game: string;
  rating: number;
  comment: string;
  avatar: string;
}
