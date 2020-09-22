import '../src/styles/index.scss'
import React from 'react'

const styles = {
  textAlign: 'center',
}
const CenterDecorator = (storyFn) => <div style={styles}> {storyFn()}</div>
export const decorators = [CenterDecorator]
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
