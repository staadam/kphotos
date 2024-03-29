import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IPairData {
  pairId: string;
  header: string;
  previewPhoto: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export interface IPairsProps {
  data: {
    allDatoCmsPair: {
      nodes: Array<IPairData>;
    };
  };
}
