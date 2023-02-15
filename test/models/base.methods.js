export const checkThatImageIsNotBroken = async (image) => {
    const width = await image.getSize(testData.imageParams.width);
    const height = await image.getSize(testData.imageParams.height);
    expect(width).toBeGreaterThan(0);
    expect(height).toBeGreaterThan(0);
};