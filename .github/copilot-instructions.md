Use Storybook's CSF3 format for Storybook stories.

All components are in Typescript.

Use the following template:

```import type { Meta, StoryObj } from '@storybook/react';

/* Actions are generated using the fn function from '@storybook/test' */
/* import component file */

const meta = {
  title: /* the path to the component relative to the 'src' folder, while skipping the 'ui' folder. All lowercase, no spaces */,
  component: /* Component name */,
} satisfies Meta<typeof /* Component name */>;

export default meta

type Story = StoryObj<typeof meta>

export const /* StoryName */: Story = {
  args: {
    /* args */
  },
};
```

Create a story for each component variant.

Name the story after the component variant.

Name the storybook file after the component file name.

Colocate the storybook file with the component file.

Components using a custom hook to make a call to an endpoint to retrieve data should be tested using msw using HttpResponse. The shape of the response should be the same as the infered type used in the hook. If the hook returns an array of objects, the response should be an array of objects. If the hook returns an object, the response should be an object. If the hook returns a primitive type, the response should be the primitive type.

We use zod to define the shape of the response from the endpoint. We use faker to generate the mocked response data in our stories.

Inspect the zod schema of the inferred type to find the shape of the response and the type of each property in the response. If a property is a UUID, generate a UUID in the mocked response data, if a property is a URL, generate a remote URL to image that can be accessed in the mocked response data, etc,.

The url should be localhost on port 54321 and should follow the pattern /rest/v1/resource. Resource is singular.

When writing components use function declarions instead of arrow functions.

Use coventional commit standard (https://www.conventionalcommits.org/en/v1.0.0?trk=public_post_comment-text) when writing commit messages.
