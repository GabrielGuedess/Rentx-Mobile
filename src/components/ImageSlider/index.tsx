import React from 'react';

import * as S from './styles';

interface ImageSliderProps {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  return (
    <S.Container>
      <S.ImagesIndexes>
        <S.ImageIndex active={true} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
        <S.ImageIndex active={false} />
      </S.ImagesIndexes>

      <S.CarImageWrapper>
        <S.CarImage source={{ uri: imagesUrl[0] }} resizeMode="contain" />
      </S.CarImageWrapper>
    </S.Container>
  );
}
