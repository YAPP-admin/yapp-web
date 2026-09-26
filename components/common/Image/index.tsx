import NextImage from 'next/image';
import styled from 'styled-components';

interface ImageProps {
  src: string;
}

const Image = ({ src, blurDataURL, ...rest }: any) => (
  <StyledImage
    src={src}
    alt={src}
    layout="fill"
    objectFit="contain"
    placeholder="blur"
    blurDataURL={blurDataURL ?? src}
    {...rest}
  />
);

const StyledImage = styled(NextImage)`
  height: auto;
  transition: 0.3s;
`;

export default Image;
