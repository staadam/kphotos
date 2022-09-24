import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface IImageData {
  datoCmsPortfolio: {
    portfolioContent: { gatsbyImageData: IGatsbyImageData }[];
  };
}

export interface IPortfolioProps {
  data: IImageData;
}
