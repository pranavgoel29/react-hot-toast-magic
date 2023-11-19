import { styled, keyframes } from 'goober';

const circleAnimation = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const lineAnimation = keyframes`
  from {
    transform: translateX(-50%) scale(0);
    opacity: 0;
    height: 0;
  }
  to {
    transform: translateX(-50%) scale(1);
    opacity: 1;
    height: 8px;
  }
`;

const dotAnimation = keyframes`
  from {
    transform: translateX(-50%) scale(0);
    opacity: 0;
    height: 0;
  }
  to {
    transform: translateX(-50%) scale(1);
    opacity: 1;
    height: 2px;
  }
`;

export interface InfoTheme {
  primary?: string;
  secondary?: string;
}

export const InfoIcon = styled('div')<InfoTheme>`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(1);
    background: ${(p) => p.primary || '#3672ff'};
    width: 20px;
    height: 20px;
    border: 2px solid ${(p) => p.primary || '#3672ff'};
    border-radius: 40px;
    animation: ${circleAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
      forwards;
    animation-delay: 100ms;
  }

  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    animation-delay: 200ms;
    position: absolute;
    border-radius: 2px;
    transform: translateX(-50%);
    width: 1px;
    left: 50%;
    border: 1.5px solid ${(p) => p.secondary || '#fdfdfd'}; // Added context color
    border-width: 0 1px 0 0;
    opacity: 0;
  }

  &::after {
    bottom: 2px;
    height: 8px;
    animation: ${lineAnimation} 0.2s ease-out forwards;
    animation-delay: 150ms;
  }

  &::before {
    height: 2px;
    top: 2.4px;
    animation: ${dotAnimation} 0.2s ease-out forwards;
    animation-delay: 180ms;
  }
`;
