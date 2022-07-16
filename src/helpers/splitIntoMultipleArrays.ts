export const splitIntoMultipleArrays = <T>(baseArray: T[], outputRowsCount: number) => {
  const newArrays: Array<T[]> = [...new Array(outputRowsCount)].map((el) => []);
  baseArray.forEach((element, idx) => {
    const subArrayIdx = (idx + 1) % outputRowsCount;
    newArrays[subArrayIdx].push(element);
  });
  
  newArrays.sort((a,b)=>a.length - b.length);

  return newArrays;
};
