export const COLORS = {
  white: "0deg 0% 100%",
  gray: {
    100: "185deg 5% 95%",
    300: "190deg 5% 80%",
    500: "196deg 4% 60%",
    700: "220deg 5% 40%",
    900: "220deg 3% 20%",
  },
  primary: "340deg 65% 47%",
  secondary: "240deg 60% 63%",
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const DEVICE_MAX_PIXELS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

const inRems = (px) => `${px / 16}rem`;
const maxBreakpoint = (size) => `(max-width: ${size})`;
const mediaQuery = (query) => `@media ${query}`;

export const BREAKPOINTS = {
  phoneMax: maxBreakpoint(inRems(DEVICE_MAX_PIXELS.phone)),
  tabletMax: maxBreakpoint(inRems(DEVICE_MAX_PIXELS.tablet)),
  laptopMax: maxBreakpoint(inRems(DEVICE_MAX_PIXELS.laptop)),
};

export const MEDIA = {
  phoneMax: mediaQuery(BREAKPOINTS.phoneMax),
  tabletMax: mediaQuery(BREAKPOINTS.tabletMax),
  laptopMax: mediaQuery(BREAKPOINTS.laptopMax),
};
