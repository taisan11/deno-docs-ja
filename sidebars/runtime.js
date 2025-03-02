const spacer = {
  type: "html",
  value: '<div style="height: 30px;"></div>',
};

// Include main doc categories on most pages
const mainMenu = [
  // https://docusaurus.io/docs/sidebar/items
  {
    type: "html",
    value: "<div>Deno Runtime</div>",
    className: "product-header",
  },
  /*
  {
    type: "doc",
    id: "index",
    label: "Quick Start",
    className: "icon-menu-option icon-menu-quick-start",
  },
  */
  {
    type: "link",
    href: "/runtime/manual",
    label: "Manual",
    className: "icon-menu-option icon-menu-user-guide",
  },
  {
    type: "link",
    label: "Tutorials & Examples",
    href: "/runtime/tutorials",
    className: "icon-menu-option icon-menu-tutorials",
  },
  {
    type: "link",
    label: "API Reference",
    href: "https://deno.land/api?unstable=true",
    className: "icon-menu-option icon-menu-api __no-external",
  },
];

const sidebars = {
  runtime: mainMenu,

  runtimeGuideHome: mainMenu.concat([
    {
      type: "html",
      value: "<div>Manual</div>",
      className: "section-header",
    },
    {
      type: "doc",
      label: "Quick Start",
      id: "manual/index",
    },
    {
      type: "category",
      label: "Denoの基本",
      items: [
        "manual/getting_started/installation",
        "manual/getting_started/first_steps",
        "manual/getting_started/setup_your_environment",
        "manual/getting_started/command_line_interface",
        "manual/getting_started/configuration_file",
        "manual/getting_started/web_frameworks",
        "manual/basics/permissions",
        "manual/basics/standard_library",
        "manual/basics/import_maps",
        "manual/basics/env_variables",
        "manual/basics/debugging_your_code",
        "manual/basics/connecting_to_databases",
        "manual/basics/react",
      ],
    },
    {
      type: "category",
      label: "Modulesの使用と公開",
      items: [
        "manual/basics/modules/index",
        "manual/basics/modules/reloading_modules",
        "manual/basics/modules/private",
        "manual/basics/modules/proxies",
        "manual/basics/modules/integrity_checking",
        "manual/advanced/publishing/index",
        "manual/advanced/publishing/dnt",
      ],
    },
    {
      type: "category",
      label: "Deno Runtime APIs",
      items: [
        "manual/runtime/builtin_apis",
        "manual/runtime/http_server_apis",
        "manual/runtime/permission_apis",
        "manual/runtime/import_meta_api",
        "manual/runtime/ffi_api",
        "manual/runtime/program_lifecycle",
        "manual/runtime/stability",
      ],
    },
    {
      type: "category",
      label: "Web Platform APIs",
      items: [
        "manual/runtime/web_platform_apis",
        "manual/runtime/location_api",
        "manual/runtime/web_storage_api",
        "manual/runtime/workers",
      ],
    },
    {
      type: "category",
      label: "Node.jsとnpmとの相互運用",
      items: [
        "manual/node/index",
        "manual/node/npm_specifiers",
        "manual/node/node_specifiers",
        "manual/node/package_json",
        "manual/node/cdns",
        "manual/node/faqs",
        "manual/node/migrate",
        "manual/references/cheatsheet",
        "manual/node/compatibility",
      ],
    },
    {
      type: "category",
      label: "CLI コマンド",
      items: [
        "manual/tools/index",
        {
          type: "doc",
          label: "deno bench",
          id: "manual/tools/benchmarker",
        },
        {
          type: "doc",
          label: "deno compile",
          id: "manual/tools/compiler",
        },
        {
          type: "doc",
          label: "deno info",
          id: "manual/tools/dependency_inspector",
        },
        {
          type: "doc",
          label: "deno doc",
          id: "manual/tools/documentation_generator",
        },
        {
          type: "doc",
          label: "deno fmt",
          id: "manual/tools/formatter",
        },
        {
          type: "doc",
          label: "deno init",
          id: "manual/tools/init",
        },
        {
          type: "doc",
          label: "deno jupyter",
          id: "manual/tools/jupyter",
        },
        {
          type: "doc",
          label: "deno lint",
          id: "manual/tools/linter",
        },
        {
          type: "doc",
          label: "deno repl",
          id: "manual/tools/repl",
        },
        {
          type: "doc",
          label: "deno install",
          id: "manual/tools/script_installer",
        },
        {
          type: "doc",
          label: "deno task",
          id: "manual/tools/task_runner",
        },
        {
          type: "doc",
          label: "deno vendor",
          id: "manual/tools/vendor",
        },
      ],
    },
    {
      type: "category",
      label: "テスト",
      items: [
        "manual/basics/testing/index",
        "manual/basics/testing/assertions",
        "manual/basics/testing/coverage",
        "manual/basics/testing/mocking",
        "manual/basics/testing/sanitizers",
        "manual/basics/testing/documentation",
        "manual/basics/testing/behavior_driven_development",
        "manual/basics/testing/snapshot_testing",
      ],
    },
    {
      type: "category",
      label: "Visual Studio Code",
      items: [
        "manual/references/vscode_deno/index",
        "manual/references/vscode_deno/testing_api",
      ],
    },
    {
      type: "category",
      label: "Denoのdeployとembedding",
      items: [
        "manual/advanced/deploying_deno/index",
        "manual/advanced/deploying_deno/aws_lightsail",
        "manual/advanced/deploying_deno/cloudflare_workers",
        "manual/advanced/deploying_deno/digital_ocean",
        "manual/advanced/deploying_deno/google_cloud_run",
        "manual/advanced/deploying_deno/kinsta",
        "manual/advanced/continuous_integration",
        "manual/advanced/embedding_deno",
      ],
    },
    {
      type: "category",
      label: "TypeScript in Deno",
      items: [
        "manual/advanced/typescript/overview",
        "manual/advanced/typescript/types",
        "manual/advanced/typescript/configuration",
        "manual/advanced/typescript/migration",
        "manual/advanced/typescript/faqs",
      ],
    },
    {
      type: "category",
      label: "Web Assembly",
      items: [
        "manual/runtime/webassembly/index",
        "manual/runtime/webassembly/using_wasm",
        "manual/runtime/webassembly/using_streaming_wasm",
        "manual/runtime/webassembly/wasm_resources",
      ],
    },
    {
      type: "category",
      label: "JSX と DOM APIs",
      items: [
        "manual/advanced/jsx_dom/overview",
        "manual/advanced/jsx_dom/jsx",
        "manual/advanced/jsx_dom/css",
        "manual/advanced/jsx_dom/twind",
        "manual/advanced/jsx_dom/jsdom",
        "manual/advanced/jsx_dom/deno_dom",
        "manual/advanced/jsx_dom/linkedom",
      ],
    },
    {
      type: "category",
      label: "Language Server",
      items: [
        "manual/advanced/language_server/overview",
        "manual/advanced/language_server/imports",
        "manual/advanced/language_server/testing_api",
      ],
    },
    {
      type: "category",
      label: "Denoにコントリビュートする",
      items: [
        "manual/references/contributing/index",
        "manual/references/contributing/architecture",
        "manual/references/contributing/building_from_source",
        "manual/references/contributing/profiling",
        "manual/references/contributing/release_schedule",
        "manual/references/contributing/style_guide",
        "manual/references/contributing/web_platform_tests",
      ],
    },
    "manual/help",
    spacer,
  ]),

  runtimeTutorialsHome: mainMenu.concat([
    {
      type: "html",
      value: "<div>Tutorials &amp; Examples</div>",
      className: "section-header",
    },
    "tutorials/index",
    {
      type: "category",
      label: "普通のExamples",
      items: [
        "tutorials/hello_world",
        "tutorials/manage_dependencies",
        "tutorials/fetch_data",
        "tutorials/read_write_files",
        "tutorials/hashbang",
      ],
    },
    {
      type: "category",
      label: "高度なExamples",
      items: [
        "tutorials/unix_cat",
        "tutorials/http_server",
        "tutorials/file_server",
        "tutorials/tcp_echo",
        "tutorials/subprocess",
        "tutorials/os_signals",
        "tutorials/file_system_events",
        "tutorials/module_metadata",
      ],
    },
    {
      type: "category",
      label: "npmModuleのExamples",
      items: [
        "tutorials/how_to_with_npm/apollo",
        "tutorials/how_to_with_npm/express",
        "tutorials/how_to_with_npm/mongoose",
        "tutorials/how_to_with_npm/mysql2",
        "tutorials/how_to_with_npm/planetscale",
        "tutorials/how_to_with_npm/prisma",
        "tutorials/how_to_with_npm/react",
        "tutorials/how_to_with_npm/redis",
        "tutorials/how_to_with_npm/vue",
      ],
    },
    {
      type: "link",
      label: "もっとDenoの例を見る",
      href: "https://examples.deno.land",
    },
    spacer,
  ]),
};

module.exports = sidebars;
