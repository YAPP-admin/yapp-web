import styled from 'styled-components';
import { Image } from 'components/common';

interface AnimatedImageStyle {
  width?: number;
  height?: number;
}

interface AnimatedImageProps extends AnimatedImageStyle {
  className?: string;
  src: string;
  alt: string;
  blurDataURL?: string;
  sizes?: string;
  quality?: number;
  objectFit?: 'contain' | 'cover';
}

function AnimatedImage({
  className,
  src,
  alt,
  blurDataURL,
  sizes,
  quality,
  objectFit,
  ...rest
}: AnimatedImageProps) {
  return (
    <ImageWrapper className={className} {...rest}>
      <ImageScaleWrapper>
        <Image
          src={src}
          alt={alt}
          blurDataURL={blurDataURL}
          sizes={sizes}
          quality={quality}
          {...(objectFit && { objectFit })}
        />
      </ImageScaleWrapper>
    </ImageWrapper>
  );
}

const ImageWrapper = styled.div<AnimatedImageStyle>`
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  width: ${({ width }) => (width ? `${width}px` : 'auto')};
  overflow: hidden;
`;

const ImageScaleWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;

  :hover {
    transform: scale(1.05);
  }
`;

export default AnimatedImage;
