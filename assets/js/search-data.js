// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-papers",
          title: "papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/papers/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-hobbies",
          title: "hobbies",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/hobbies/";
          },
        },{id: "news-honored-to-receive-the-clore-scholarship-for-exceptional-phd-students",
          title: 'Honored to receive the Clore Scholarship for exceptional PhD students.',
          description: "",
          section: "News",},{id: "news-new-approximate-distance-oracles-and-their-applications-won-the-best-paper-award-at-isaac-2025",
          title: '‘New Approximate Distance Oracles and Their Applications’ won the Best Paper Award at...',
          description: "",
          section: "News",},{id: "news-improved-girth-approximation-in-weighted-undirected-graphs-was-accepted-to-sicomp",
          title: '‘Improved Girth Approximation in Weighted Undirected Graphs’ was accepted to SICOMP.',
          description: "",
          section: "News",},{id: "news-faster-algorithms-for-2k-1-stretch-distance-oracles-was-accepted-to-icalp-2026",
          title: '‘Faster Algorithms for (2k-1)-Stretch Distance Oracles’ was accepted to ICALP 2026.',
          description: "",
          section: "News",},{id: "news-two-papers-accepted-to-esa-2026-in-l-aquila",
          title: 'Two papers accepted to ESA 2026 in L’Aquila!',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
