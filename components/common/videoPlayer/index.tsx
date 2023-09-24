import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import media from 'styles/media';

interface VideoPlayerProps {
  src: string;
}

function VideoPlayer({ src }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [lowPowerMode, setLowPowerMode] = useState(false);

  useEffect(() => {
    const video = videoRef.current! as HTMLVideoElement;
    // 아이폰 저전력모드의 경우 play 시 NotAllowedError가 발생, 이 경우 <img>로 대체
    video.play().catch((error) => {
      if (error.name === 'NotAllowedError') {
        setLowPowerMode(true);
      }
    });
  }, [videoRef]);

  return (
    <>
      <Container>
        <VideoPlayerContainer>
          {!lowPowerMode ? (
            <video
              height={'100%'}
              src={src}
              ref={videoRef}
              playsInline
              autoPlay
              muted
              loop
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
            <img height={'100%'} src={src}></img>
          )}
        </VideoPlayerContainer>
      </Container>
    </>
  );
}

export default VideoPlayer;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const VideoPlayerContainer = styled.div`
  height: 1100px;
  ${media.custom(1280)} {
    height: 906px;
  }
  ${media.custom(743)} {
    height: 394px;
  }
`;
