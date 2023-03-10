import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import { Photos } from 'dtos/CarDTO';

import { Bullet } from 'components/Bullet';

import * as S from './styles';

interface ImageSliderProps {
  imagesUrl: Photos[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  return (
    <S.Container>
      <S.ImagesIndexes>
        {imagesUrl.map((item, index) => (
          <Bullet key={String(item.id)} active={index === imageIndex} />
        ))}
      </S.ImagesIndexes>

      <FlatList
        data={imagesUrl}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <S.CarImageWrapper>
            <S.CarImage
              source={{
                uri: item.photo,
              }}
              resizeMode="contain"
            />
          </S.CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
      />
    </S.Container>
  );
}
