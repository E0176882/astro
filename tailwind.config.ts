export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      xs: '480px', // Extra small devices (phones)
      sm: '576px', // Small devices (large phones)
      md: '768px', // Medium devices (tablets)
      lg: '992px', // Large devices (laptops)
      xl: '1200px', // Extra large devices (desktops)
      '2xl': '1600px', // 2X Extra large devices
    },
    extend: {},
  },
  plugins: [],
};
