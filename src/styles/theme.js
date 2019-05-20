export default {
  name: "default",
  colors: {
    dark: "#231829",
    brown: "#5b1715",
    beige: "#F2E9E0",
    white: "#fff",
    greyLight: "#EDEDEF",
    grey: "#B5B2BB",
    black: "#1F1424",
    overlay: "#rgba(0, 0, 0, 0.7)"
  },
  shadows: {
    // use like box-shadow: ${({theme}) => theme.shadows.z1};
    z1:
      "0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 1px 1px 0px rgba(10, 22, 70, 0.1)",
    z2:
      "0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 3px 3px -1px rgba(10, 22, 70, 0.1)",
    z3:
      "0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 6px 6px -1px rgba(10, 22, 70, 0.1)",
    z4:
      "0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 16px 16px -1px rgba(10, 22, 70, 0.1)",
    z5:
      "0px 0px 1px 0px rgba(10, 22, 70, 0.06), 0px 32px 40px -2px rgba(10, 22, 70, 0.12)"
  },
  layout: {
    sideMargin: "242px"
  },
  breakpoints: {
    maxmobile: "@media all and (max-width: 767px)",
    maxlaptop: "@media all and (max-width: 991px)",
    maxdesktop: "@media all and (max-width: 1199px)",
    minmobile: "@media all and (min-width: 767px)",
    minlaptop: "@media all and (min-width: 991px)",
    mindesktop: "@media all and (min-width: 1199px)"
  }
}
