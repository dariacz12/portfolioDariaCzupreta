import {
  ChevronLeftIcon,
  Footer_default,
} from "/build/_shared/chunk-2CZMDNUZ.js";
import { st } from "/build/_shared/chunk-I7BREEDM.js";
import { Box, size } from "/build/_shared/chunk-G3CXWJSJ.js";
import "/build/_shared/chunk-NMZL6IDN.js";
import "/build/_shared/chunk-BD4Y5PPP.js";
import { Outlet, useNavigate } from "/build/_shared/chunk-MXG4W4FK.js";
import "/build/_shared/chunk-7HCXXYEW.js";
import "/build/_shared/chunk-UWV35TSL.js";
import { require_jsx_dev_runtime } from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import "/build/_shared/chunk-BOXFZXVX.js";
import { __toESM } from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/myprojects.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MainContainer = st.div.withConfig({
  displayName: "myprojects__MainContainer",
  componentId: "sc-1uq7bex-0",
})(["min-height:100vh;display:flex;flex-direction:column;"]);
var HeaderBox = st.div.withConfig({
  displayName: "myprojects__HeaderBox",
  componentId: "sc-1uq7bex-1",
})(
  [
    "width:100%;height:50px;margin-top:40px;padding-left:80px;padding-right:80px;@media (max-width:",
    "){padding-left:40px;padding-right:40px;}",
  ],
  size.md,
);
var BoxLine = st.div.withConfig({
  displayName: "myprojects__BoxLine",
  componentId: "sc-1uq7bex-2",
})(
  [
    "margin-left:80px;margin-right:80px;height:1px;background-color:#bdbdbd;@media (max-width:",
    "){margin-left:40px;margin-right:40px;}",
  ],
  size.md,
);
function MyProjectsRoute() {
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    MainContainer,
    {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          HeaderBox,
          {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              ChevronLeftIcon,
              {
                onClick: () => navigate(-1),
                cursor: "pointer",
                backgroundColor: "#D1C4E9",
                color: "white",
                boxSize: 8,
                borderRadius: "full",
              },
              void 0,
              false,
              {
                fileName: "app/routes/myprojects.tsx",
                lineNumber: 24,
                columnNumber: 9,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: "app/routes/myprojects.tsx",
            lineNumber: 23,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          BoxLine,
          {},
          void 0,
          false,
          {
            fileName: "app/routes/myprojects.tsx",
            lineNumber: 26,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Box,
          {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              Outlet,
              {},
              void 0,
              false,
              {
                fileName: "app/routes/myprojects.tsx",
                lineNumber: 28,
                columnNumber: 9,
              },
              this,
            ),
          },
          void 0,
          false,
          {
            fileName: "app/routes/myprojects.tsx",
            lineNumber: 27,
            columnNumber: 7,
          },
          this,
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Footer_default,
          {},
          void 0,
          false,
          {
            fileName: "app/routes/myprojects.tsx",
            lineNumber: 30,
            columnNumber: 7,
          },
          this,
        ),
      ],
    },
    void 0,
    true,
    {
      fileName: "app/routes/myprojects.tsx",
      lineNumber: 22,
      columnNumber: 10,
    },
    this,
  );
}
export { MyProjectsRoute as default };
//# sourceMappingURL=/build/routes/myprojects-DT4J4Z4R.js.map
