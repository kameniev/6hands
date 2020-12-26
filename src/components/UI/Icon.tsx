import React from 'react'
import EyeIcon1 from 'assets/eye-line-1.svg'
import EyeIcon2 from 'assets/eye-line-2.svg'
import Search from 'assets/search.svg'
import Stars from 'assets/images/stars.svg'
import Ellipse from 'assets/ellipse.svg'
import Connector from 'assets/connector.svg'



const Icons = {
 EyeIcon1: EyeIcon1,
 EyeIcon2: EyeIcon2,
 Search: Search,
 Stars: Stars,
 Ellipse: Ellipse,
 Connector: Connector
}

export type IconName = keyof typeof Icons

type IconProps = {
  name: IconName,
  width?: number,

}


class Icon extends React.Component<IconProps> {
  render() {
  const SelectedIcon = Icons[this.props.name]

  return <SelectedIcon width={this.props.width}/>}
}

export default Icon