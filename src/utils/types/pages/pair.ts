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

export type TPairContent = Array<IParagraph | IImage>;

export interface IPairProps {
  data: {
    datoCmsPair: {
      header: string;
      previewPhoto: {
        gatsbyImageData: IGatsbyImageData;
      };
      pairContent: TPairContent;
    };
  };
}
