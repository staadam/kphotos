import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IContactProps {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}
