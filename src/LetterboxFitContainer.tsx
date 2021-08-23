import { useCallback, useEffect } from "react";
import { useLayoutEffect } from "react";
import { FC, useRef } from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`

const InnerContainer = styled.div`

`

const LetterboxFitContainer: FC = ({children}) => {
  const outerContainerRef = useRef<HTMLDivElement>(null)
  const innerContainerRef = useRef<HTMLDivElement>(null)

  const detectAndResize = useCallback(() => {
    const outerContainer = outerContainerRef.current
    const innerContainer = innerContainerRef.current
    if (outerContainer && innerContainer) {
      const outerAspectRatio = outerContainer.clientWidth / outerContainer.clientHeight;
      const innerAspectRatio = innerContainer.clientWidth / innerContainer.clientHeight;
      // Scales to fit a maximum width or height (whatever comes first) for the page's viewport
      const scalingFactor =
        outerAspectRatio < innerAspectRatio
          ? outerContainer.clientWidth / innerContainer.clientWidth
          : outerContainer.clientHeight / innerContainer.clientHeight;
        innerContainer.style.transform = `scale(${scalingFactor}, ${scalingFactor})`;
    }
  }, [outerContainerRef, innerContainerRef])

  useLayoutEffect(() => {
    detectAndResize()
  })

  useEffect(() => {
    window.addEventListener('resize', detectAndResize)
    return () => {window.removeEventListener('resize', detectAndResize)}
  }, [])

  return (
    <OuterContainer ref={outerContainerRef}>
      <InnerContainer ref={innerContainerRef}>
        {children}
      </InnerContainer>
    </OuterContainer>
  );
}

export default LetterboxFitContainer;
