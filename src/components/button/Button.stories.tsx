import { Meta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

export const Demo = () => <Button>Click Me</Button>;
