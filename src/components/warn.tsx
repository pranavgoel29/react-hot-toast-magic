import { styled, keyframes } from 'goober';

const triangleAnimation = keyframes`
  from {
    transform: translateY(-50%) rotate(0deg);
    opacity: 0;
  }
  to {
    transform: translateY(-50%) rotate(360deg);
    opacity: 1;
  }
`;

const lineAnimation = keyframes`
from {
  transform: translateY(-50%) rotate(0deg) scaleY(0);
  opacity: 0;
}
to {
  transform: translateY(-50%) rotate(360deg) scaleY(1);
  opacity: 1;
  height: 8px;
}`;

const dotAnimation = keyframes`
from {
  transform: translateY(-50%) rotate(0deg) scale(0);
  opacity: 0;
  height: 0;
}
to {
  transform: translateY(-50%) rotate(360deg) scale(1);
  opacity: 1;
  height: 2px;
}`;

export interface WarnTheme {
  primary?: string;
  secondary?: string;
}

export const WarnIcon = styled('div')<WarnTheme>`
  width: 0;
  height: 0;
  top: 9px;
  border-left: 13px solid transparent;
  border-right: 13px solid transparent;
  border-bottom: 23.32px solid ${(p) => p.primary || '#ffcc00'};
  position: relative;
  animation: ${triangleAnimation} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:before,
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    opacity: 0;
  }

  &:after {
    top: 11px;
    left: -0.5px;
    border: solid ${(p) => p.secondary || '#000'};
    border-width: 0 2px 0 0;
    animation: ${lineAnimation} 0.2s ease-out forwards;
    animation-delay: 150ms;
    border-radius: 3px;
  }

  &:before {
    top: 18px;
    left: -0.5px;
    bottom: 2px;
    border: solid ${(p) => p.secondary || '#000'};
    border-width: 0 2px 0 0;
    animation: ${dotAnimation} 0.2s ease-out forwards;
    animation-delay: 180ms;
    border-radius: 50%;
  }
`;
