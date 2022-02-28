export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "621d3f9adf909c37861478c9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-vondfvoz",
                  apiId: "9cde3844-7aa5-43be-8aae-bc1e87844966",
                },
                {
                  buildHookId: "621d3f9a032ca83c1f270d4e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-fcxuw3gr",
                  apiId: "c0c7f383-2a78-49d7-a5e0-0ee87d62bd1a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/mattmcgiv/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-fcxuw3gr.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
