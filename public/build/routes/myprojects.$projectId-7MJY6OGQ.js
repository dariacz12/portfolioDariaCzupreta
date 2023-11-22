import {
  projectsList
} from "/build/_shared/chunk-RRIN2AHI.js";
import {
  st
} from "/build/_shared/chunk-I7BREEDM.js";
import {
  Box,
  Heading,
  Image,
  Link,
  Text,
  size
} from "/build/_shared/chunk-G3CXWJSJ.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-BD4Y5PPP.js";
import {
  useParams
} from "/build/_shared/chunk-MXG4W4FK.js";
import "/build/_shared/chunk-7HCXXYEW.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/myprojects.$projectId.tsx
var import_react3 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var TextWrap = st.div.withConfig({
  displayName: "myprojectsprojectId__TextWrap",
  componentId: "sc-1flsnmt-0"
})(["padding-left:350px;padding-right:350px;padding-top:30px;padding-bottom:30px;display:flex;justify-content:center;flex-direction:column;@media (max-width:", "){padding-left:150px;padding-right:150px;}@media (max-width:", "){padding-left:100px;padding-right:100px;}@media (max-width:", "){padding-left:50px;padding-right:50px;}"], size.xl, size.lg, size.md);
var ProjectBox = st.div.withConfig({
  displayName: "myprojectsprojectId__ProjectBox",
  componentId: "sc-1flsnmt-1"
})(["margin-top:40px;margin-bottom:40px;"]);
function ProjectRoute() {
  const paramId = useParams().projectId;
  console.log("params", paramId);
  const [pageLoaded, setPageLoaded] = (0, import_react3.useState)();
  (0, import_react3.useEffect)(() => {
    setPageLoaded(true);
    const video = videoRef.current;
    if (video) {
      video.addEventListener("canplay", () => {
        video.play();
      });
    }
  }, []);
  const videoRef = (0, import_react3.useRef)(null);
  (0, import_react3.useEffect)(() => {
    const video = videoRef.current;
    if (video) {
      const playPromise = video.play();
      if (playPromise !== void 0) {
        playPromise.then(() => {
        }).catch(() => {
        });
      }
    }
  }, []);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { children: paramId && projectsList.filter(({
    id
  }) => id === Number(paramId)).map(({
    projectName,
    videoName,
    mainInfo,
    text,
    tools,
    website,
    github,
    images
  }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "flex", flexDirection: "column", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextWrap, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, { as: "h3", size: "xl", my: 5, children: projectName }, void 0, false, {
        fileName: "app/routes/myprojects.$projectId.tsx",
        lineNumber: 52,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { fontSize: "md", children: mainInfo }, void 0, false, {
        fileName: "app/routes/myprojects.$projectId.tsx",
        lineNumber: 55,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProjectBox, { children: pageLoaded && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("video", { style: {
        borderRadius: "15px"
      }, autoPlay: true, ref: videoRef, loop: true, playsInline: true, muted: true, src: videoName }, void 0, false, {
        fileName: "app/routes/myprojects.$projectId.tsx",
        lineNumber: 57,
        columnNumber: 36
      }, this) }, void 0, false, {
        fileName: "app/routes/myprojects.$projectId.tsx",
        lineNumber: 56,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { pr: {
        "2xl": "200px"
      }, pl: {
        "2xl": "200px"
      }, fontSize: "md", fontWeight: "medium", color: "#757575", children: "About" }, void 0, false, {
        fileName: "app/routes/myprojects.$projectId.tsx",
        lineNumber: 61,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { pr: {
        "2xl": "200px"
      }, pl: {
        "2xl": "200px"
      }, lineHeight: "170%", fontSize: "sm", color: "#757575", children: [
        " ",
        text,
        " "
      ] }, void 0, true, {
        fileName: "app/routes/myprojects.$projectId.tsx",
        lineNumber: 68,
        columnNumber: 19
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/myprojects.$projectId.tsx",
      lineNumber: 51,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { position: "relative", display: "flex", alignItems: "center", backgroundColor: "#673AB7", w: "100%", height: {
      base: "430px",
      md: "300px",
      lg: "350px"
    }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { zIndex: 1, position: "absolute", alignContent: "start", display: "flex", flexDirection: "column", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextWrap, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { pr: {
      "2xl": "200px"
    }, pl: {
      "2xl": "200px"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: "white", fontWeight: "medium", fontSize: "md", children: "Technologies" }, void 0, false, {
        fileName: "app/routes/myprojects.$projectId.tsx",
        lineNumber: 89,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { style: {
        display: "flex",
        flexWrap: "wrap",
        paddingTop: "15px"
      }, children: tools.map((tool) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { fontSize: "sm", borderRadius: "8px", padding: "10px", marginTop: "15px", marginRight: "15px", backgroundColor: "#D1C4E9", color: "white", fontWeight: "medium", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { style: {
        textShadow: "#673AB7 1px 0 15px;"
      }, children: tool }, void 0, false, {
        fileName: "app/routes/myprojects.$projectId.tsx",
        lineNumber: 98,
        columnNumber: 31
      }, this) }, void 0, false, {
        fileName: "app/routes/myprojects.$projectId.tsx",
        lineNumber: 97,
        columnNumber: 46
      }, this)) }, void 0, false, {
        fileName: "app/routes/myprojects.$projectId.tsx",
        lineNumber: 92,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "flex", flexWrap: "wrap", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { paddingTop: "25px", paddingRight: "100px", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: "white", fontWeight: "medium", fontSize: "md", children: "Website" }, void 0, false, {
            fileName: "app/routes/myprojects.$projectId.tsx",
            lineNumber: 107,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { fontSize: "sm", fontWeight: "medium", color: "white", href: `${website}`, isExternal: true, children: [
            " ",
            website,
            " "
          ] }, void 0, true, {
            fileName: "app/routes/myprojects.$projectId.tsx",
            lineNumber: 110,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/myprojects.$projectId.tsx",
          lineNumber: 106,
          columnNumber: 27
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { paddingTop: "25px", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { color: "white", fontWeight: "medium", fontSize: "md", children: [
            " ",
            "GitHub"
          ] }, void 0, true, {
            fileName: "app/routes/myprojects.$projectId.tsx",
            lineNumber: 116,
            columnNumber: 29
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { fontSize: "sm", fontWeight: "medium", color: "white", href: `${github}`, isExternal: true, children: [
            " ",
            github,
            " "
          ] }, void 0, true, {
            fileName: "app/routes/myprojects.$projectId.tsx",
            lineNumber: 120,
            columnNumber: 29
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/myprojects.$projectId.tsx",
          lineNumber: 115,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/myprojects.$projectId.tsx",
        lineNumber: 105,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/myprojects.$projectId.tsx",
      lineNumber: 84,
      columnNumber: 23
    }, this) }, void 0, false, {
      fileName: "app/routes/myprojects.$projectId.tsx",
      lineNumber: 83,
      columnNumber: 21
    }, this) }, void 0, false, {
      fileName: "app/routes/myprojects.$projectId.tsx",
      lineNumber: 82,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/myprojects.$projectId.tsx",
      lineNumber: 77,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { display: "flex", alignContent: "center", justifyContent: "center", flexDirection: "row", flexWrap: "wrap", p: "35", children: paramId && projectsList && (images == null ? void 0 : images.map(({
      name,
      caption
    }) => {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, { p: "30px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", children: [
        paramId === "1" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { style: {
          borderRadius: "15px"
        }, src: `/${name}`, mb: "30px", width: {
          md: "300px",
          sm: "200px"
        } }, void 0, false, {
          fileName: "app/routes/myprojects.$projectId.tsx",
          lineNumber: 138,
          columnNumber: 49
        }, this),
        paramId !== "1" && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Image, { style: {
          borderRadius: "15px"
        }, src: `/${name}`, mb: "30px", width: {
          md: "950px",
          sm: "500px"
        } }, void 0, false, {
          fileName: "app/routes/myprojects.$projectId.tsx",
          lineNumber: 144,
          columnNumber: 49
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { fontSize: "sm", color: "#757575", fontWeight: "medium", textAlign: "center", pb: "5", children: [
          " ",
          caption,
          " "
        ] }, void 0, true, {
          fileName: "app/routes/myprojects.$projectId.tsx",
          lineNumber: 150,
          columnNumber: 27
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/myprojects.$projectId.tsx",
        lineNumber: 137,
        columnNumber: 18
      }, this);
    })) }, void 0, false, {
      fileName: "app/routes/myprojects.$projectId.tsx",
      lineNumber: 132,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/myprojects.$projectId.tsx",
    lineNumber: 50,
    columnNumber: 11
  }, this)) }, void 0, false, {
    fileName: "app/routes/myprojects.$projectId.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
export {
  ProjectRoute as default
};
//# sourceMappingURL=/build/routes/myprojects.$projectId-7MJY6OGQ.js.map
