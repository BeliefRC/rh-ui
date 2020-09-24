import React from 'react'
import { addDecorator, addParameters } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import '../src/styles/index.scss'

addDecorator(withInfo)
addParameters({ info: { inline: false, header: false } })
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
}
