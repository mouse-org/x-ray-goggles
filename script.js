function browserOsSwitch(os, browser) {
  
  var osCopy = {
    mac: {
      chrome: {
        text: "If you're using Chrome on a Mac, look at your top menu bar, click View, and make sure Always View Bookmarks Bar is selected.",
        image1: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark1-mac%20os-chrome%402x.png?v=1568145728485",
        image2: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark2-mac%20os-chrome%402x.png?v=1568147214689"
      },
      firefox: {
        text: "If you're using Firefox on a Mac, look at your top menu bar, click View, and make sure Bookmark Toolbar is selected.",
        image1: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark1-mac%20os-firefox%402x.png?v=1568832890872",
        image2: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark2-mac%20os-firefox%402x.png?v=1568832890634"
      },
      safari: {
        text: "If you're using Safari on a Mac, look at your top menu bar, click View, and make sure Show Favorites Bar is selected.",
        image1: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark1-mac%20os-safari%402x.png?v=1568832891351",
        image2: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark2-mac%20os-safari%402x.png?v=1568832891187"
      },
    },
    windows: {
      ie: {
        text: "If you're using Internet Explorer on Windows, right-click on the main tabs bar, then make sure Favorites bar is selected.",
        image1: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark1-windows-ie%402x.png?v=1568210030887",
        image2: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark2-windows-ie%402x.png?v=1568210258023"
      },
      firefox: {
        text: "If you're using Firefox on Windows, look next to your Search bar for the bookmarks clipboard icon, click it, then navigate to Bookmarks Toolbar, then make sure View Bookmarks Toolbar is selected.",
        image1: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark1-windows-firefox%402x.png?v=1568210257114",
        image2: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark2-windows-firefox%402x.png?v=1568210257038"
      },
      chrome: {
        text: "If you're using Chrome on Windows, click the options icon to the right of your URL bar, select Bookmarks, then make sure Show bookmarks bar is selected.",
        image1: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark1-windows-chrome%402x.png?v=1568210258262",
        image2: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark2-windows-chrome%402x.png?v=1568210257579"
      }
    },
    other: {
      firefox: {
        text: "If you're using Firefox, look next to your Search bar for the bookmarks clipboard icon, click it, then navigate to Bookmarks Toolbar, then make sure View Bookmarks Toolbar is selected.",
        image1: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark1-windows-firefox%402x.png?v=1568210257114",
        image2: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark2-windows-firefox%402x.png?v=1568210257038"
      },
      chrome: {
        text: "If you're using Chrome, click the options icon to the right of your URL bar, select Bookmarks, then make sure Show bookmarks bar is selected.",
        image1: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark1-windows-chrome%402x.png?v=1568210258262",
        image2: "https://cdn.glitch.com/4be08ec8-dd6f-4a0e-88a4-0bcf147aa4e8%2Fbookmark2-windows-chrome%402x.png?v=1568210257579"
      }
    }
  }
  
  var text1 = document.getElementById("text1")
  var image1 = document.getElementById("image1")
  var image2 = document.getElementById("image2")
  
  var selection = osCopy[os][browser]
  
  text1.innerHTML = selection.text
  image1.src = selection.image1
  image2.src = selection.image2
  
}