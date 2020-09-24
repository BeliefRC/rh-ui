import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import Button, { ButtonProps } from "./button";

export default {
  title: "Example/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args: any) => (
  <Button onClick={action("clicked")} {...args}>
    Button
  </Button>
);
export const DefaultButton = Template.bind({});
DefaultButton.storyName = "Button";

const TemplateWithSize: Story<ButtonProps> = (args: any) => (
  <>
    <Button size="lg"> large button </Button>
    <Button size="sm"> small button </Button>
  </>
);

export const ButtonWithSize = TemplateWithSize.bind({});
ButtonWithSize.storyName = "不同尺寸的 Button";

const TemplateWithType: Story<ButtonProps> = (args: any) => (
  <>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com">
      {" "}
      link button{" "}
    </Button>
  </>
);
export const ButtonWithType = TemplateWithType.bind({});
ButtonWithType.storyName = "不同类型的 Button";
