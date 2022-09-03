import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IPairsProps {
  data: {
    allDatoCmsPair: {
      nodes: Array<{
        previewPhoto: {
          gatsbyImageData: IGatsbyImageData;
        };
      }>;
    };
  };
}
