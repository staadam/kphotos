import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IImage {
  id: string;
  image: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export interface IParagraph {
  id: string;
  paragraph: string;
}

export interface IPairOverviewProps {
  header: string;
  previewPhoto: {
    gatsbyImageData: IGatsbyImageData;
    resolutions: {
      aspectRatio: number;
    };
  };
  pairDescription?: Array<{
    paragraph: string;
  }>;
}

export interface IPairProps {
  data: {
    datoCmsPair: {
      header: string;
      previewPhoto: {
        gatsbyImageData: IGatsbyImageData;
        resolutions: {
          aspectRatio: number;
        };
      };
      pairPhotos: Array<{
        gatsbyImageData: IGatsbyImageData;
      }>;
      pairDescription: Array<{
        paragraph: string;
      }>;
    };
  };
}
