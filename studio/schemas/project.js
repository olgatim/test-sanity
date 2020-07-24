export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    // ... other fields ...
    {
      name: "name",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      name: "tags",
      title: "Tags",
      type: "string",
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "string",
    },
  ],
};
