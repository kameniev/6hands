import React from 'react'
import EyeIcon1 from '../../assets/eye-line-1.svg'
import EyeIcon2 from '../../assets/eye-line-2.svg'
import Search from '../../assets/search.svg'



const Icons = {
 EyeIcon1: EyeIcon1,
 EyeIcon2: EyeIcon2,
 Search: Search
}

export type IconName = keyof typeof Icons

type IconProps = {
  name: IconName,
  width?: number
}


class Icon extends React.Component<IconProps> {
  render() {
  const SelectedIcon = Icons[this.props.name]

  return <SelectedIcon width={this.props.width}></SelectedIcon>}
}

export default Icon