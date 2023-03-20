import React from 'react';
import 'devextreme/dist/css/dx.light.css';
import { CreateHTMLLayoutFromDataJs } from './components/viewHTMLTable/index';
import { DownloadButton } from './components/downloadButton/index'
import {items} from './data/data';
import TabPanel, { Item } from 'devextreme-react/tab-panel';
import { CreateDataGridLayoutFromDataJs } from './components/viewDataGridTable';

function App() {
  return (
    <>
      <p>Тестовый APP для excelJS проекта.</p>
      <TabPanel>
        <Item title='HTML Layout'>
          <DownloadButton/>
          <CreateHTMLLayoutFromDataJs items={items}/>
        </Item>
        <Item title='Datagrid Layout'>
          <DownloadButton/>
          <CreateDataGridLayoutFromDataJs items={items}/>
        </Item>
      </TabPanel>

    </>
  );
}

export default App;
