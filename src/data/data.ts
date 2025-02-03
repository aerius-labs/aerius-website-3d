interface ServiceItem {
  title: string;
  description: string;
}

interface ProductItem {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  links: {
    link: string;
    icon: string;
  }[];
}

interface BlogPost {
  title: string;
  description: string;
  link: string;
  image: {
    src: string;
    alt: string;
  };
  publishDate: string;
}

interface PartnerLogo {
  id: number;
  src: string;
  link: string;
}

export const serviceItem: ServiceItem[] = [
  {
    title: 'R&D',
    description: `Whether it is leveraging an anonymous network, ZKPs, MPC or any other privacy technique, we can assist your team in integrating these tools into your product's initial prototyping phase.`,
  },
  {
    title: 'Consulting',
    description: `We provide expert consulting by creating catered implementations for clients who want to integrate ZK or cryptography into their solutions, guiding organizations to unlock the potential of secure digital solutions.`,
  },
  {
    title: 'Auditing',
    description: `We offer thorough analysis and verification of zero-knowledge circuits and smart contracts for enhanced security and reliability.`,
  },
];

export const productItem: ProductItem[] = [
  {
    id: 1,
    imageSrc: '/images/vex.svg',
    imageAlt: 'vex_logo',
    title: 'VEX',
    description:
      'Not a CEX. Not a DEX. A revolutionary exchange platform that combines the best of both worlds—delivering centralized performance with decentralized trust',
    links: [
      {
        link: 'https://x.com/trade_vex',
        icon: '/socialIcons/twitter_icon.svg',
      },
      {
        link: 'https://medium.com/vex-research',
        icon: '/socialIcons/medium_icon.svg',
      },
      {
        link: 'https://t.me/trade_vex',
        icon: '/socialIcons/telegram_icon.svg',
      },
    ],
  },
  {
    id: 2,
    imageSrc: '/images/scalerize.svg',
    imageAlt: 'scalerize_logo',
    title: 'Scalerize',
    description:
      'Scalerize is an adaptable optimistic rollup stack that enables developers to build custom rollups for any blockchain, ensuring secure, fast transactions with single-slot finality, fraud proofs, and IBC support.',
    links: [
      {
        link: 'https://x.com/Scalerize_XYZ',
        icon: '/socialIcons/twitter_icon.svg',
      },
    ],
  },
  {
    id: 3,
    imageSrc: '/images/zk-snap.svg',
    imageAlt: 'zkSnap_logo',
    title: 'Zk Snap',
    description:
      'ZkSnap leverages zk proofs to provide secure, anonymous DAO voting with ballot privacy, ensuring integrity and protection from external influence in the decision-making process.',
    links: [
      {
        link: 'https://drive.google.com/file/d/1bu0oe9PVTtSuT8JpwMmzKEG8Fb-mdPLH/view',
        icon: '/socialIcons/scroll_icon.svg',
      },
    ],
  },
];

export const blogsData: BlogPost[] = [
  {
    title: 'Understanding Finality - Part 1',
    description:
      'The concept of “finality” plays a big role in establishing immutability and reliability in a blockchain network. Finality refers to the point at which',
    link: 'https://blog.aeriuslabs.org/understanding-finality-part-1-blockchain-for-dummies-2a2472aea926',
    image: {
      src: '/blogs/finality.gif',
      alt: 'Finality_alt_image',
    },
    publishDate: 'Aug 23, 2024',
  },
  {
    title: 'Decoding Consensus - Part 1',
    description:
      'Blockchains have changed the way we access and utilise various services. We can now transfer assets directly without relying on intermediaries',
    link: 'https://blog.aeriuslabs.org/decoding-consensus-blockchain-for-dummies-part-1-c9cb71609e11',
    image: {
      src: '/blogs/consensus.webp',
      alt: 'Consesus_alt_image',
    },
    publishDate: 'Jan 22, 2024',
  },
  {
    title: 'User Anonymity in an adversarial environment',
    description:
      'In today’s digital landscape, striking a balance between user privacy and safeguarding against spam and abuse',
    link: 'https://blog.aeriuslabs.org/protecting-user-anonymity-exploring-rate-limiting-nullifiers-using-zero-knowledge-proofs-2b97e7b68e52',
    image: {
      src: '/blogs/user-anonymity.webp',
      alt: 'anonymity_alt_image',
    },
    publishDate: 'Feb 3, 2024',
  },
  {
    title: 'Demystifying KZG Commitments',
    description:
      'We now present a very simple walkthrough of the entire process in an attempt to make the reader understand the KZG commitment',
    link: 'https://blog.aeriuslabs.org/demystifying-kzg-commitments-f1de10f13e93',
    image: {
      src: '/blogs/demistifying-kzg.webp',
      alt: 'kzg_commitments_alt_image',
    },
    publishDate: 'May 2, 2023',
  },
];

export const partnerLogos: PartnerLogo[] = [
  {
    id: 1,
    src: '/partners/sindri-logo.svg',
    link: 'https://sindri.app/',
  },
  {
    id: 2,
    src: '/partners/cysic-logo.webp',
    link: 'https://cysic.xyz/',
  },
  {
    id: 3,
    src: '/partners/plume-network-logo.png',
    link: 'https://plumenetwork.xyz/',
  },
  {
    id: 4,
    src: '/partners/d3-inc-logo.png',
    link: 'https://d3.inc/',
  },
];
