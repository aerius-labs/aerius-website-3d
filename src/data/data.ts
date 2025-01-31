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
  },
  {
    id: 2,
    imageSrc: '/images/scalerize.svg',
    imageAlt: 'scalerize_logo',
    title: 'Scalerize',
    description:
      'Scalerize is an adaptable optimistic rollup stack that enables developers to build custom rollups for any blockchain, ensuring secure, fast transactions with single-slot finality, fraud proofs, and IBC support.',
  },
  {
    id: 3,
    imageSrc: '/images/zk-snap.svg',
    imageAlt: 'zkSnap_logo',
    title: 'Zk Snap',
    description:
      'ZkSnap leverages zk proofs to provide secure, anonymous DAO voting with ballot privacy, ensuring integrity and protection from external influence in the decision-making process.',
  },
];

export const blogsData: BlogPost[] = [
  {
    title: 'Athena Finance',
    description:
      'On-chain asset management for the Cosmos ecosystem, based on CosmWasm.',
    link: '#athenaFinance',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s',
      alt: 'Blog Post Image',
    },
    publishDate: '13, Dec, 2024',
  },
  {
    title: 'Athena Finance',
    description:
      'On-chain asset management for the Cosmos ecosystem, based on CosmWasm.',
    link: '#athenaFinance',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s',
      alt: 'Blog Post Image',
    },
    publishDate: '13, Dec, 2024',
  },
  {
    title: 'Athena Finance',
    description:
      'On-chain asset management for the Cosmos ecosystem, based on CosmWasm.',
    link: '#athenaFinance',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s',
      alt: 'Blog Post Image',
    },
    publishDate: '13, Dec, 2024',
  },
  {
    title: 'Athena Finance',
    description:
      'On-chain asset management for the Cosmos ecosystem, based on CosmWasm.',
    link: '#athenaFinance',
    image: {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s',
      alt: 'Blog Post Image',
    },
    publishDate: '13, Dec, 2024',
  },
];

export const partnerLogos: PartnerLogo[] = [
  {
    id: 1,
    src: 'https://labs.sigma.software/wp-content/uploads/2022/10/human-new.svg',
    link: 'https://partner1.com',
  },
  {
    id: 2,
    src: 'https://labs.sigma.software/wp-content/uploads/2022/10/human-new.svg',
    link: 'https://partner2.com',
  },
  {
    id: 3,
    src: 'https://labs.sigma.software/wp-content/uploads/2022/10/human-new.svg',
    link: 'https://partner3.com',
  },
  {
    id: 4,
    src: 'https://labs.sigma.software/wp-content/uploads/2022/10/human-new.svg',
    link: 'https://partner4.com',
  },
  {
    id: 5,
    src: 'https://labs.sigma.software/wp-content/uploads/2022/10/human-new.svg',
    link: 'https://partner5.com',
  },
  {
    id: 6,
    src: 'https://labs.sigma.software/wp-content/uploads/2022/10/human-new.svg',
    link: 'https://partner6.com',
  },
  {
    id: 7,
    src: 'https://labs.sigma.software/wp-content/uploads/2022/10/human-new.svg',
    link: 'https://partner7.com',
  },
  {
    id: 8,
    src: 'https://labs.sigma.software/wp-content/uploads/2022/10/human-new.svg',
    link: 'https://partner8.com',
  },
  {
    id: 9,
    src: 'https://labs.sigma.software/wp-content/uploads/2022/10/human-new.svg',
    link: 'https://partner9.com',
  },
  {
    id: 10,
    src: 'https://labs.sigma.software/wp-content/uploads/2022/10/human-new.svg',
    link: 'https://partner5.com',
  },
];
