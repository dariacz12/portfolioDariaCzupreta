import { projectsList } from "/build/_shared/chunk-RRIN2AHI.js";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  Footer_default,
  HamburgerIcon,
} from "/build/_shared/chunk-2CZMDNUZ.js";
import { st } from "/build/_shared/chunk-I7BREEDM.js";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Icon,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Wrap,
  size,
  useMediaQuery,
} from "/build/_shared/chunk-G3CXWJSJ.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-BD4Y5PPP.js";
import { useNavigate } from "/build/_shared/chunk-MXG4W4FK.js";
import { createHotContext } from "/build/_shared/chunk-7HCXXYEW.js";
import "/build/_shared/chunk-UWV35TSL.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import { require_react } from "/build/_shared/chunk-BOXFZXVX.js";
import { __toESM } from "/build/_shared/chunk-PNG5AS42.js";

// app/customHooks/openCV.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/customHooks/openCV.ts",
  );
  import.meta.hot.lastModified = "1691592076523.634";
}
var openCV = () => {
  const pdfPath = "/documents/cvDariaCzupreta.pdf";
  return window.open(pdfPath, "_blank");
};
var openCV_default = openCV;

// app/components/BurgerMenuItem.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var BurgerMenuItem = () => {
  const handleClickScroll = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Box,
    {
      mr: 10,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Menu,
        {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              MenuButton,
              {
                as: IconButton,
                "aria-label": "Options",
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  HamburgerIcon,
                  {},
                  void 0,
                  false,
                  {
                    fileName: "app/components/BurgerMenuItem.tsx",
                    lineNumber: 15,
                    columnNumber: 64,
                  },
                  this,
                ),
                variant: "outline",
              },
              void 0,
              false,
              {
                fileName: "app/components/BurgerMenuItem.tsx",
                lineNumber: 15,
                columnNumber: 9,
              },
              this,
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              MenuList,
              {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    MenuItem,
                    { onClick: () => openCV_default(), children: "CV" },
                    void 0,
                    false,
                    {
                      fileName: "app/components/BurgerMenuItem.tsx",
                      lineNumber: 17,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    MenuItem,
                    {
                      onClick: () => handleClickScroll("#projects"),
                      children: "Projects",
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/BurgerMenuItem.tsx",
                      lineNumber: 18,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                    MenuItem,
                    {
                      onClick: () => handleClickScroll("#testimonials"),
                      children: "Testimonials",
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/BurgerMenuItem.tsx",
                      lineNumber: 21,
                      columnNumber: 11,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "app/components/BurgerMenuItem.tsx",
                lineNumber: 16,
                columnNumber: 9,
              },
              this,
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "app/components/BurgerMenuItem.tsx",
          lineNumber: 14,
          columnNumber: 7,
        },
        this,
      ),
    },
    void 0,
    false,
    {
      fileName: "app/components/BurgerMenuItem.tsx",
      lineNumber: 13,
      columnNumber: 10,
    },
    this,
  );
};
var BurgerMenuItem_default = BurgerMenuItem;

// app/components/Header.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var Header = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    Box,
    {
      w: "100%",
      py: 12,
      height: "50px",
      flex: "1",
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
      justifyContent: "center",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        BurgerMenuItem_default,
        {},
        void 0,
        false,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 5,
          columnNumber: 7,
        },
        this,
      ),
    },
    void 0,
    false,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 4,
      columnNumber: 10,
    },
    this,
  );
};
var Header_default = Header;

// app/components/Highlights.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var Highlights = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Box,
    {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "100vw",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          Card,
          {
            py: "10px",
            mx: 10,
            width: "max",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              CardBody,
              {
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Heading,
                    { as: "h6", size: "md", children: "Highlights" },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 8,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      pt: "10px",
                      color: "#673AB7",
                      fontWeight: "medium",
                      children: "Programming Languages:",
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 11,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      pt: "3px",
                      children: "JavaScript, React, CSS, HTML",
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 14,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      color: "#673AB7",
                      fontWeight: "medium",
                      pt: "10px",
                      children: "Dev Tools:",
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 17,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    { fontSize: "md", pt: "3px", children: [" ", "Git"] },
                    void 0,
                    true,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 20,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    { fontSize: "md", pt: "3px", children: "TypeScript" },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 24,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      pt: "3px",
                      children: ["React Router, React Query", " "],
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 27,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      pt: "3px",
                      children: [" ", "React Hook Form, Redux"],
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 30,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      pt: "3px",
                      children: [" ", "Firebase, Styled Components"],
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 34,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      pt: "3px",
                      children: [" ", "Elementor Pro"],
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 38,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      pt: "3px",
                      children: [" ", "Mocha, SCSS, Axios"],
                    },
                    void 0,
                    true,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 42,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      color: "#673AB7",
                      fontWeight: "medium",
                      pt: "10px",
                      children: "Teamwork Tools:",
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 46,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      pt: "3px",
                      children: "Miro, Discord, Slack",
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 49,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      pt: "3px",
                      children: "Clickup, Teamwork, Jira, Trello",
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 52,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      pt: "3px",
                      children: "Scrum, Kanban, Lean, Agile, Design Thinking",
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 55,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      color: "#673AB7",
                      fontWeight: "medium",
                      pt: "10px",
                      children: "Languages I speak:",
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 58,
                      columnNumber: 11,
                    },
                    this,
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                    Text,
                    {
                      fontSize: "md",
                      pt: "3px",
                      children: "English, Polish, Russian, Belarusian",
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Highlights.tsx",
                      lineNumber: 61,
                      columnNumber: 11,
                    },
                    this,
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "app/components/Highlights.tsx",
                lineNumber: 7,
                columnNumber: 9,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: "app/components/Highlights.tsx",
            lineNumber: 6,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          Image,
          {
            pl: "20px",
            pr: "10px",
            src: "/programmergirl.svg",
            pt: "10px",
            mt: {
              md: "40px",
              base: "0px",
            },
            mb: {
              md: "0px",
              base: "40px",
            },
            height: {
              md: "430px",
              base: "420px",
            },
          },
          void 0,
          false,
          {
            fileName: "app/components/Highlights.tsx",
            lineNumber: 66,
            columnNumber: 7,
          },
          this,
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/components/Highlights.tsx",
      lineNumber: 5,
      columnNumber: 10,
    },
    this,
  );
};
var Highlights_default = Highlights;

// app/components/MainInfo.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
var MainContainer = st.div.withConfig({
  displayName: "MainInfo__MainContainer",
  componentId: "sc-nipq6w-0",
})(
  [
    "width:100%;padding-top:10px;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;@media (max-width:",
    "){padding-top:0px;}",
  ],
  size.md,
);
var TextWrapper = st.div.withConfig({
  displayName: "MainInfo__TextWrapper",
  componentId: "sc-nipq6w-1",
})(["padding:5px 30px;"]);
var MainInfo = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 768px)");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    MainContainer,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          Heading,
          { as: "h2", size: "2xl", my: 5, children: "Frontend Developer" },
          void 0,
          false,
          {
            fileName: "app/components/MainInfo.tsx",
            lineNumber: 20,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          TextWrapper,
          {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              Text,
              {
                textAlign: "center",
                fontSize: {
                  base: "lg",
                  md: "xl",
                },
                children:
                  "I code beautifully, simple things, and I love what I do",
              },
              void 0,
              false,
              {
                fileName: "app/components/MainInfo.tsx",
                lineNumber: 24,
                columnNumber: 9,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: "app/components/MainInfo.tsx",
            lineNumber: 23,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          Wrap,
          {
            zIndex: 1,
            pt: {
              base: 5,
              md: 3,
            },
            pb: {
              base: 4,
              md: 3,
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              Image,
              {
                src: "/avatarDCz.jpg",
                borderRadius: "full",
                boxSize: {
                  base: "200px",
                  md: "220px",
                },
              },
              void 0,
              false,
              {
                fileName: "app/components/MainInfo.tsx",
                lineNumber: 39,
                columnNumber: 9,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: "app/components/MainInfo.tsx",
            lineNumber: 32,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          Text,
          {
            zIndex: 1,
            color: "white",
            fontWeight: "medium",
            fontSize: "xl",
            children: "Daria Czupreta",
          },
          void 0,
          false,
          {
            fileName: "app/components/MainInfo.tsx",
            lineNumber: 44,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          Button,
          {
            my: 3,
            zIndex: 2,
            color: "whiteAlpha",
            bgColor: "#D1C4E9",
            onClick: () => openCV_default(),
            children: "Download CV",
          },
          void 0,
          false,
          {
            fileName: "app/components/MainInfo.tsx",
            lineNumber: 47,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          Box,
          {
            backgroundColor: "#673AB7",
            w: "100%",
            height: "250px",
            position: "absolute",
            top: "250px",
          },
          void 0,
          false,
          {
            fileName: "app/components/MainInfo.tsx",
            lineNumber: 50,
            columnNumber: 7,
          },
          this,
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/components/MainInfo.tsx",
      lineNumber: 19,
      columnNumber: 10,
    },
    this,
  );
};
var MainInfo_default = MainInfo;

// app/components/Projects.tsx
var import_react6 = __toESM(require_react());
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
var Menu2 = st.div.withConfig({
  displayName: "Projects__Menu",
  componentId: "sc-eg3dx6-0",
})(["display:flex;flex-direction:row;margin-bottom:10px;"]);
var ProjectBox = st.div.withConfig({
  displayName: "Projects__ProjectBox",
  componentId: "sc-eg3dx6-1",
})(
  ["position:relative;margin:40px;@media (max-width:", "){display:none;}"],
  size.md,
);
var TextBox = st.div.withConfig({
  displayName: "Projects__TextBox",
  componentId: "sc-eg3dx6-2",
})(
  [
    "display:flex;flex-direction:column;pointer-events:none;width:100%;background-color:rgba(6,0,6,0.5);position:absolute;bottom:0px;padding-left:100px;padding-top:10px;padding-bottom:15px;border-bottom-left-radius:15px;border-bottom-right-radius:15px;@media (max-width:",
    "){bottom:0px;padding-left:50px;}@media (max-width:",
    "){bottom:0px;padding-left:50px;}",
  ],
  size.sm,
  size.md,
);
var ProjectBoxSmall = st.div.withConfig({
  displayName: "Projects__ProjectBoxSmall",
  componentId: "sc-eg3dx6-3",
})(
  [
    "position:relative;display:none;@media (max-width:",
    "){display:flex;margin:20px;}",
  ],
  size.md,
);
var calculateOpacity = (size2) => {
  if (size2.sm) {
    return 1;
  } else {
    return 0.5;
  }
};
var Projects = () => {
  const videoRefs = (0, import_react6.useRef)([]);
  const setVideoRefs = (videoElement, index) => {
    videoRefs.current[index] = videoElement;
  };
  (0, import_react6.useEffect)(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.addEventListener("mouseenter", () => {
          video.style.opacity = "1";
          video.play();
        });
        video.addEventListener("mouseleave", () => {
          video.style.opacity = "0.5";
          video.pause();
        });
      }
    });
    return () => {
      videoRefs.current.forEach((video) => {
        if (video) {
          video.removeEventListener("mouseenter", () => {
            video.style.opacity = "1";
            video.play();
          });
          video.removeEventListener("mouseleave", () => {
            video.style.opacity = "0.5";
            video.pause();
          });
        }
      });
    };
  }, [videoRefs]);
  const [textBoxVisibility, setTextBoxVisibility] = (0, import_react6.useState)(
    {},
  );
  const opacity = calculateOpacity(size);
  const handleMouseOver = (id) => {
    setTextBoxVisibility((prevState) => ({
      ...prevState,
      [id]: true,
    }));
  };
  const handleMouseOut = (id) => {
    setTextBoxVisibility((prevState) => ({
      ...prevState,
      [id]: false,
    }));
  };
  const [state, setState] = (0, import_react6.useState)(false);
  const [isLargerThan] = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    Box,
    {
      id: "projects",
      display: "flex",
      alignItems: "center",
      mt: {
        lg: "80px",
        md: "60px",
        base: "0px",
      },
      justifyContent: "center",
      flexWrap: "wrap",
      width: "100vw",
      flexDirection: "column",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          Heading,
          {
            as: "h6",
            size: "lg",
            mb: "20px",
            children: [" ", "Projects", " "],
          },
          void 0,
          true,
          {
            fileName: "app/components/Projects.tsx",
            lineNumber: 88,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          Menu2,
          {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                Button,
                {
                  fontSize: "lg",
                  color: "#757575",
                  mx: "25px",
                  variant: "outline",
                  backgroundColor: !state ? "#D1C4E9" : void 0,
                  _hover: {
                    bg: "#D1C4E9",
                  },
                  onClick: () => setState(false),
                  children: [" ", "All", " "],
                },
                void 0,
                true,
                {
                  fileName: "app/components/Projects.tsx",
                  lineNumber: 93,
                  columnNumber: 9,
                },
                this,
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                Button,
                {
                  fontSize: "lg",
                  color: "#757575",
                  backgroundColor: state === "app" ? "#D1C4E9" : void 0,
                  mx: "10px",
                  variant: "outline",
                  _hover: {
                    bg: "#D1C4E9",
                  },
                  onClick: () => setState("app"),
                  children: [" ", "Mobile apps", " "],
                },
                void 0,
                true,
                {
                  fileName: "app/components/Projects.tsx",
                  lineNumber: 99,
                  columnNumber: 9,
                },
                this,
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                Button,
                {
                  fontSize: "lg",
                  color: "#757575",
                  backgroundColor: state === "webpage" ? "#D1C4E9" : void 0,
                  mx: "10px",
                  variant: "outline",
                  _hover: {
                    bg: "#D1C4E9",
                  },
                  onClick: () => setState("webpage"),
                  children: [" ", "Websites", " "],
                },
                void 0,
                true,
                {
                  fileName: "app/components/Projects.tsx",
                  lineNumber: 105,
                  columnNumber: 9,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "app/components/Projects.tsx",
            lineNumber: 92,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          Box,
          {
            flex: "1",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            px: "30px",
            children: projectsList
              .filter(({ type }) => type === state || !state)
              .map(({ videoName, id, projectName, mainInfo, tools }, index) => {
                return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                  Box,
                  {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                        ProjectBox,
                        {
                          onMouseOver: () => handleMouseOver(id),
                          onMouseOut: () => handleMouseOut(id),
                          onClick: () => navigate(`/myprojects/${id}`),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                              "video",
                              {
                                style: {
                                  opacity: 0.5,
                                  borderRadius: "15px",
                                },
                                width: "650px",
                                ref: (videoElement) =>
                                  setVideoRefs(videoElement, index),
                                loop: true,
                                playsInline: true,
                                muted: true,
                                src: videoName,
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/components/Projects.tsx",
                                lineNumber: 124,
                                columnNumber: 19,
                              },
                              this,
                            ),
                            textBoxVisibility[id] &&
                              /* @__PURE__ */ (0,
                              import_jsx_dev_runtime5.jsxDEV)(
                                TextBox,
                                {
                                  children: /* @__PURE__ */ (0,
                                  import_jsx_dev_runtime5.jsxDEV)(
                                    Box,
                                    {
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime5.jsxDEV)(
                                          Heading,
                                          {
                                            mb: "10px",
                                            color: "white",
                                            textShadow: "lg",
                                            as: "h4",
                                            fontSize: {
                                              lg: "lg",
                                              md: "md",
                                              base: "sm",
                                            },
                                            children: projectName,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "app/components/Projects.tsx",
                                            lineNumber: 131,
                                            columnNumber: 25,
                                          },
                                          this,
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime5.jsxDEV)(
                                          Text,
                                          {
                                            mb: "10px",
                                            color: "white",
                                            fontSize: {
                                              lg: "md",
                                              md: "md",
                                              base: "sm",
                                            },
                                            textShadow: "2xl",
                                            pr: "20px",
                                            children: mainInfo,
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "app/components/Projects.tsx",
                                            lineNumber: 138,
                                            columnNumber: 25,
                                          },
                                          this,
                                        ),
                                        /* @__PURE__ */ (0,
                                        import_jsx_dev_runtime5.jsxDEV)(
                                          Box,
                                          {
                                            style: {
                                              display: "flex",
                                            },
                                            position: "relative",
                                            zIndex: 2,
                                            children: tools
                                              .filter(
                                                (tool) =>
                                                  tools.indexOf(tool) <= 4,
                                              )
                                              .map((tool) =>
                                                /* @__PURE__ */ (0,
                                                import_jsx_dev_runtime5.jsxDEV)(
                                                  Text,
                                                  {
                                                    fontSize: {
                                                      base: "xs",
                                                      base: "sm",
                                                    },
                                                    borderRadius: "5px",
                                                    padding: "5px",
                                                    backgroundColor: "#673AB7",
                                                    mr: "8px",
                                                    color: "white",
                                                    textShadow: "lg",
                                                    children: tool,
                                                  },
                                                  void 0,
                                                  false,
                                                  {
                                                    fileName:
                                                      "app/components/Projects.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 87,
                                                  },
                                                  this,
                                                ),
                                              ),
                                          },
                                          void 0,
                                          false,
                                          {
                                            fileName:
                                              "app/components/Projects.tsx",
                                            lineNumber: 145,
                                            columnNumber: 25,
                                          },
                                          this,
                                        ),
                                      ],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: "app/components/Projects.tsx",
                                      lineNumber: 130,
                                      columnNumber: 23,
                                    },
                                    this,
                                  ),
                                },
                                void 0,
                                false,
                                {
                                  fileName: "app/components/Projects.tsx",
                                  lineNumber: 129,
                                  columnNumber: 45,
                                },
                                this,
                              ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "app/components/Projects.tsx",
                          lineNumber: 123,
                          columnNumber: 17,
                        },
                        this,
                      ),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                        ProjectBoxSmall,
                        {
                          onClick: () => navigate(`/myprojects/${id}`),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                              "video",
                              {
                                style: {
                                  borderRadius: "15px",
                                },
                                width: "650px",
                                src: videoName,
                              },
                              void 0,
                              false,
                              {
                                fileName: "app/components/Projects.tsx",
                                lineNumber: 159,
                                columnNumber: 19,
                              },
                              this,
                            ),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                              TextBox,
                              {
                                children: [
                                  /* @__PURE__ */ (0,
                                  import_jsx_dev_runtime5.jsxDEV)(
                                    Heading,
                                    {
                                      mb: "10px",
                                      color: "white",
                                      textShadow: "lg",
                                      as: "h4",
                                      fontSize: "sm",
                                      children: projectName,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/components/Projects.tsx",
                                      lineNumber: 163,
                                      columnNumber: 21,
                                    },
                                    this,
                                  ),
                                  /* @__PURE__ */ (0,
                                  import_jsx_dev_runtime5.jsxDEV)(
                                    Text,
                                    {
                                      mb: "10px",
                                      color: "white",
                                      fontSize: "sm",
                                      textShadow: "2xl",
                                      pr: "30px",
                                      children: mainInfo,
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/components/Projects.tsx",
                                      lineNumber: 166,
                                      columnNumber: 21,
                                    },
                                    this,
                                  ),
                                  /* @__PURE__ */ (0,
                                  import_jsx_dev_runtime5.jsxDEV)(
                                    Box,
                                    {
                                      style: {
                                        display: "flex",
                                      },
                                      children: tools
                                        .filter(
                                          (tool) => tools.indexOf(tool) <= 3,
                                        )
                                        .map((tool) =>
                                          /* @__PURE__ */ (0,
                                          import_jsx_dev_runtime5.jsxDEV)(
                                            Text,
                                            {
                                              fontSize: "xs",
                                              borderRadius: "5px",
                                              padding: "5px",
                                              backgroundColor: "#673AB7",
                                              mr: "8px",
                                              color: "white",
                                              textShadow: "lg",
                                              children: tool,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName:
                                                "app/components/Projects.tsx",
                                              lineNumber: 172,
                                              columnNumber: 83,
                                            },
                                            this,
                                          ),
                                        ),
                                    },
                                    void 0,
                                    false,
                                    {
                                      fileName: "app/components/Projects.tsx",
                                      lineNumber: 169,
                                      columnNumber: 21,
                                    },
                                    this,
                                  ),
                                ],
                              },
                              void 0,
                              true,
                              {
                                fileName: "app/components/Projects.tsx",
                                lineNumber: 162,
                                columnNumber: 19,
                              },
                              this,
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: "app/components/Projects.tsx",
                          lineNumber: 158,
                          columnNumber: 17,
                        },
                        this,
                      ),
                    ],
                  },
                  index,
                  true,
                  {
                    fileName: "app/components/Projects.tsx",
                    lineNumber: 122,
                    columnNumber: 16,
                  },
                  this,
                );
              }),
          },
          void 0,
          false,
          {
            fileName: "app/components/Projects.tsx",
            lineNumber: 112,
            columnNumber: 7,
          },
          this,
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/components/Projects.tsx",
      lineNumber: 83,
      columnNumber: 10,
    },
    this,
  );
};
var Projects_default = Projects;

// app/components/Testimonials.tsx
var import_react10 = __toESM(require_react());
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
var MainContainer2 = st.div.withConfig({
  displayName: "Testimonials__MainContainer",
  componentId: "sc-ud4y7j-0",
})(
  [
    "width:100%;padding-top:10px;flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;margin-bottom:40px;@media (max-width:",
    "){padding-top:0px;}",
  ],
  size.md,
);
var WrapSlaid = st.div.withConfig({
  displayName: "Testimonials__WrapSlaid",
  componentId: "sc-ud4y7j-1",
})([
  "display:flex;align-items:center;justify-content:center;margin-right:50px;margin-left:50px;max-height:500px;max-width:800px;",
]);
var DotsWrapper = st.div.withConfig({
  displayName: "Testimonials__DotsWrapper",
  componentId: "sc-ud4y7j-2",
})(["display:flex;align-items:center;justify-content:center;margin-top:20px;"]);
var Slaid = st.div.withConfig({
  displayName: "Testimonials__Slaid",
  componentId: "sc-ud4y7j-3",
})([
  "padding-top:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;",
]);
var testimonialsList = [
  {
    id: 1,
    name: "Rados\u0142aw Michalak",
    position: "W\u0142a\u015Bciciel Swiplo",
    img: "Rados\u0142awMichalak.jpeg",
    testimonialBody:
      "Jestem mega zadowolony ze wsp\xF3\u0142pracy z Dari\u0105 przy przepisywaniu naszej aplikacji mobilnej Swiplo. Nowa wersja wygl\u0105da teraz jeszcze lepiej, dzia\u0142a te\u017C wydajniej i ma wi\u0119cej fajnych opcji. Polecam Dari\u0119 ka\u017Cdemu, kto szuka frontend developera, kt\xF3ry naprawd\u0119 wczuwa si\u0119 w biznesowe potrzeby klienta.",
  },
  {
    id: 2,
    name: "Marcin Cie\u015Blinski",
    position: " Senior Manager | Business Agility Lead ",
    img: "MarcinCieslinski.jpeg",
    testimonialBody:
      "I have worked with Daria on several projects. Daria proved herself as a very effective and motivated person. She is always ready to take on any challenge brought in her way. Her willingness to learn and apply the new knowledge are extraordinary.",
  },
  {
    id: 3,
    name: "Rafa\u0142 Piku\u0142a",
    position: "Project Manager",
    img: "RafalPikula.jpeg",
    testimonialBody:
      "Daria da\u0142a si\u0119 pozna\u0107 jako osoba bardzo mocno skoncentrowana na osi\u0105ganiu za\u0142o\u017Conych cel\xF3w. Realizuj\u0105c zr\xF3\u017Cnicowane projekty z zakresu Digital Signage zawsze wykazywa\u0142a si\u0119 wysokim zaanga\u017Cowaniem oraz profesjonalizmem.",
  },
];
var Testimonials = () => {
  const [currentIndex, setcurrentIndex] = (0, import_react10.useState)(0);
  const prevSlide = () => {
    const ifFirstSlide = currentIndex === 0;
    const newIndex = ifFirstSlide
      ? testimonialsList.length - 1
      : currentIndex - 1;
    setcurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const ifFirstSlide = currentIndex === testimonialsList.length - 1;
    const newIndex = ifFirstSlide ? 0 : currentIndex + 1;
    setcurrentIndex(newIndex);
  };
  const goToSlaide = (slideIndex) => {
    setcurrentIndex(slideIndex);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    MainContainer2,
    {
      id: "testimonials",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          Heading,
          {
            as: "h6",
            size: "lg",
            mb: "20px",
            mt: "20px",
            children: [" ", "Testimonials", " "],
          },
          void 0,
          true,
          {
            fileName: "app/components/Testimonials.tsx",
            lineNumber: 57,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          Text,
          {
            fontSize: "sm",
            pt: "3px",
            color: "#757575",
            children: "People I've worked with have said some nice things ...",
          },
          void 0,
          false,
          {
            fileName: "app/components/Testimonials.tsx",
            lineNumber: 61,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          WrapSlaid,
          {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                ChevronLeftIcon,
                {
                  cursor: "pointer",
                  onClick: prevSlide,
                  backgroundColor: "gray.100",
                  color: "#757575",
                  boxSize: 7,
                  borderRadius: "full",
                },
                void 0,
                false,
                {
                  fileName: "app/components/Testimonials.tsx",
                  lineNumber: 65,
                  columnNumber: 9,
                },
                this,
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                Slaid,
                {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      Wrap,
                      {
                        zIndex: 1,
                        pt: {
                          base: 4,
                          md: 3,
                        },
                        pb: {
                          base: 4,
                          md: 3,
                        },
                        children: /* @__PURE__ */ (0,
                        import_jsx_dev_runtime6.jsxDEV)(
                          Image,
                          {
                            src: `/${testimonialsList[currentIndex].img}`,
                            borderRadius: "full",
                            boxSize: {
                              base: "150px",
                              md: "170px",
                            },
                          },
                          void 0,
                          false,
                          {
                            fileName: "app/components/Testimonials.tsx",
                            lineNumber: 74,
                            columnNumber: 13,
                          },
                          this,
                        ),
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/Testimonials.tsx",
                        lineNumber: 67,
                        columnNumber: 11,
                      },
                      this,
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      Text,
                      {
                        lineHeight: "6",
                        fontSize: "sm",
                        pt: "3px",
                        width: "60%",
                        textAlign: "center",
                        children: `"${testimonialsList[currentIndex].testimonialBody}"`,
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/Testimonials.tsx",
                        lineNumber: 79,
                        columnNumber: 11,
                      },
                      this,
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      Text,
                      {
                        textAlign: "center",
                        lineHeight: "6",
                        fontWeight: "medium",
                        fontSize: "sm",
                        pt: "15px",
                        width: "60%",
                        children: `${testimonialsList[currentIndex].name}`,
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/Testimonials.tsx",
                        lineNumber: 82,
                        columnNumber: 11,
                      },
                      this,
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                      Text,
                      {
                        textAlign: "center",
                        color: "#757575",
                        lineHeight: "6",
                        fontSize: "sm",
                        pt: "3px",
                        width: "60%",
                        children: `${testimonialsList[currentIndex].position}`,
                      },
                      void 0,
                      false,
                      {
                        fileName: "app/components/Testimonials.tsx",
                        lineNumber: 85,
                        columnNumber: 11,
                      },
                      this,
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: "app/components/Testimonials.tsx",
                  lineNumber: 66,
                  columnNumber: 9,
                },
                this,
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                ChevronRightIcon,
                {
                  cursor: "pointer",
                  onClick: nextSlide,
                  backgroundColor: "gray.100",
                  color: "#757575",
                  boxSize: 7,
                  borderRadius: "full",
                },
                void 0,
                false,
                {
                  fileName: "app/components/Testimonials.tsx",
                  lineNumber: 89,
                  columnNumber: 9,
                },
                this,
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: "app/components/Testimonials.tsx",
            lineNumber: 64,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          DotsWrapper,
          {
            children: testimonialsList.map((element) =>
              /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                Icon,
                {
                  onClick: () =>
                    goToSlaide(Number(testimonialsList.indexOf(element))),
                  cursor: "pointer",
                  padding: "2px",
                  margin: "5px",
                  viewBox: "0 0 200 200",
                  color:
                    currentIndex === Number(testimonialsList.indexOf(element))
                      ? "#673AB7"
                      : "gray.100",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
                    "path",
                    {
                      fill: "currentColor",
                      d: "M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0",
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/components/Testimonials.tsx",
                      lineNumber: 93,
                      columnNumber: 13,
                    },
                    this,
                  ),
                },
                void 0,
                false,
                {
                  fileName: "app/components/Testimonials.tsx",
                  lineNumber: 92,
                  columnNumber: 42,
                },
                this,
              ),
            ),
          },
          void 0,
          false,
          {
            fileName: "app/components/Testimonials.tsx",
            lineNumber: 91,
            columnNumber: 7,
          },
          this,
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/components/Testimonials.tsx",
      lineNumber: 56,
      columnNumber: 10,
    },
    this,
  );
};
var Testimonials_default = Testimonials;

// app/routes/_index.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
var MainContainer3 = st.div.withConfig({
  displayName: "_index__MainContainer",
  componentId: "sc-16yh94z-0",
})(
  [
    "min-height:100vh;position:relative;@media (max-width:",
    "){flex-direction:column;}",
  ],
  size.lg,
);
var HighlightsContainer = st.div.withConfig({
  displayName: "_index__HighlightsContainer",
  componentId: "sc-16yh94z-1",
})(["max-width:40%;margin-top:100px;"]);
var _index = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    MainContainer3,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          Header_default,
          {},
          void 0,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 22,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          MainInfo_default,
          {},
          void 0,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 23,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          Box,
          {
            pl: 25,
            zIndex: 1,
            top: "355px",
            position: "absolute",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              Image,
              {
                src: "/codelinesvertical.png",
                pt: {
                  base: "10px",
                  md: "0px",
                },
                height: {
                  md: "230px",
                  base: "220px",
                },
                visibility: {
                  base: "visible",
                  lg: "hidden",
                },
              },
              void 0,
              false,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 25,
                columnNumber: 9,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 24,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          HighlightsContainer,
          {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
              Highlights_default,
              {},
              void 0,
              false,
              {
                fileName: "app/routes/_index.tsx",
                lineNumber: 37,
                columnNumber: 9,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 36,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          Projects_default,
          {},
          void 0,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 39,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          Testimonials_default,
          {},
          void 0,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 40,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          Footer_default,
          {},
          void 0,
          false,
          {
            fileName: "app/routes/_index.tsx",
            lineNumber: 42,
            columnNumber: 7,
          },
          this,
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/routes/_index.tsx",
      lineNumber: 21,
      columnNumber: 10,
    },
    this,
  );
};
var index_default = _index;
export { index_default as default };
//# sourceMappingURL=/build/routes/_index-EH3TK3WY.js.map
