import {
  ClientStyleContext
} from "/build/_shared/chunk-SLOXJI4L.js";
import {
  CacheProvider,
  createCache
} from "/build/_shared/chunk-BD4Y5PPP.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-MXG4W4FK.js";
import {
  createHotContext
} from "/build/_shared/chunk-7HCXXYEW.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react_dom
} from "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/entry.client.tsx
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());

// app/createEmotionCache.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/createEmotionCache.ts"
  );
  import.meta.hot.lastModified = "1691592076523.353";
}
var defaultCache = createEmotionCache();
function createEmotionCache() {
  return createCache({ key: "cha" });
}

// app/entry.client.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ClientCacheProvider({
  children
}) {
  const [cache, setCache] = (0, import_react.useState)(defaultCache);
  function reset() {
    setCache(createEmotionCache());
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientStyleContext.Provider, { value: {
    reset
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CacheProvider, { value: cache, children }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 20,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/entry.client.tsx",
    lineNumber: 17,
    columnNumber: 10
  }, this);
}
(0, import_react_dom.hydrate)(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientCacheProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RemixBrowser, {}, void 0, false, {
  fileName: "app/entry.client.tsx",
  lineNumber: 24,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/entry.client.tsx",
  lineNumber: 23,
  columnNumber: 9
}, this), document);
//# sourceMappingURL=/build/entry.client-IBTU7K7S.js.map
