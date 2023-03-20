import { items } from '../../data/data'

import 'devextreme/dist/css/dx.light.css';
import Button from 'devextreme-react/button';
import { exportToXLSX } from '../exportToXLSX';


export function DownloadButton () {
  return (
    <Button
    onClick={exportToXLSX}>
      Скачать документ в Excel
    </Button>
  )
}