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
                    "6304e0b7b51d500424dd258f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-hkgr74yh",
                  apiId: "3d8abe0e-be3f-4e70-a4f7-d5ccfc40fe5a",
                },
                {
                  buildHookId: "6304e0b846be5f03ed930f5c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-9zzb5v85",
                  apiId: "a5467b99-ada7-456d-a488-afcefe497f25",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sidorovpavel/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-9zzb5v85.netlify.app",
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
