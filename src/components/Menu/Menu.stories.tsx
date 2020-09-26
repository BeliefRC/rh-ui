import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { action } from "@storybook/addon-actions";
import Menu, { MenuProps } from "./menu";
import MenuItem from "./menuItem";

export default {
  title: "Menu",
  component: Menu,
} as Meta;

const TemplateMenu: Story<MenuProps> = (args: MenuProps) => (
  <Menu
    defaultIndex="0"
    onSelect={(index) => {
      action(`clicked ${index} item`);
    }}
    {...args}
  >
    <MenuItem>link</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <MenuItem>link 2</MenuItem>
  </Menu>
);

export const DefaultMenu = TemplateMenu.bind({
  mode: "vertical",
});
DefaultMenu.storyName = "Menu";
