import DataGrid, { Scrolling } from "devextreme-react/data-grid"
import { TitemType } from "../../data/types"

type TCreateLayoutFromDataJsProps = {
  items: TitemType[]
}
export function CreateDataGridLayoutFromDataJs(props: TCreateLayoutFromDataJsProps){
  return(
    <DataGrid
      id='DataGrid'
      dataSource={props.items}
      keyExpr='id'
      columnAutoWidth
    >
    </DataGrid>
  )
}