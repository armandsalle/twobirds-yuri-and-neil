export const isTouchScreen = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0
