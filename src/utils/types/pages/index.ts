import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IIndexProps {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}
