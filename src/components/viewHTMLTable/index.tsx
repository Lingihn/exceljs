import {items} from '../../data/data'
import {TitemType} from '../../data/types';
import react from 'react'
import 'devextreme/dist/css/dx.light.css';

type TCreateLayoutFromDataJsProps = {
  items: TitemType[]
}

export function CreateHTMLLayoutFromDataJs(props: TCreateLayoutFromDataJsProps) {
  const items = props.items
  const getHeader = (items: TitemType[]) => {
    return <tr> { Object.keys(items[0]).map((item) => <td>{item}</td>) } </tr>
  }
  const getBody = (items: TitemType[]) => {
    return items.map((item) => getRow(item ) )
  }
  const getRow = (item: TitemType) => {
    return <tr> { Object.values(item).map((item) => <td>{item}</td>) } </tr>
  }
  return (
    <table border={1}>
      <thead>
        {getHeader(items)}
      </thead>
      <tbody>
        {getBody(items)}
      </tbody>
    </table>
  )
}